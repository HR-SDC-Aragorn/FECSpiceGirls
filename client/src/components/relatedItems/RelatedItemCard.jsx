import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx';
import StarRating from '../Overview/StarRating.jsx';

function RelatedItemCard({ product, style, handleCurrent, currentProduct }) {
  const [defaultItems, setDefault] = useState({ original_price: product.default_price });
  const [avgRating, setRating] = useState(0);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (product && style) {
      for (let i = 0; i < style.length; ++i) {
        if (style[i]['default?']) {
          setDefault(style[i]);
          break;
        }
      }
      axios.get('/reviews', { params: { product_id: product.id } })
        .then((response) => {
          const numRatings = Object.values(response.data.ratings);
          const typeRatings = Object.keys(response.data.ratings);
          let sum = 0;
          let numCount = 0;
          for (let i = 0; i < numRatings.length; ++i) {
            sum += (numRatings[i] * typeRatings[i]);
            numCount += parseInt(numRatings[i], 10);
          }
          const avg = (Math.round((sum / numCount) * 4) / 4).toFixed(2);
          setRating(avg);
        });
    }
  }, [product]);

  function openModal() {
    setPopup(true);
  }

  function closeModal() {
    setPopup(false);
  }

  function onChange() {
    handleCurrent(product.id);
  }

  return (
    <div>
      { product && style && avgRating ? (
        <div className="each-list">
          <div className="star-div">
            <button type="button" className="star-button" onClick={openModal}> &#9734; </button>
          </div>
          <div className="related-image">
            {style[0].photos[0].url
              ? <img src={style[0].photos[0].url} alt="" />
              : <img src="https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg" alt="" />}
          </div>
          <div className="related-text" onClick={onChange}>
            <div>
              {product.category}
            </div>
            <div className="product-name">
              {product.name}
            </div>
            <div>
              {defaultItems.sale_price
                ? (
                  <div className="sale-price">
                    {' '}
                    $
                    {defaultItems.sale_price}
                    {' '}
                    <div className="discount">
                      {' '}
                      $
                      {defaultItems.original_price}
                      {' '}
                    </div>
                    {' '}
                  </div>
                )
                : (
                  <div>
                    {' '}
                    $
                    {defaultItems.original_price}
                    {' '}
                  </div>
                )}
            </div>
            <div className="ratings">
              <StarRating starRating={avgRating} />
            </div>
          </div>
        </div>
      ) : null}
      {popup && (
        <div>
          <ComparisonModal
            currentProduct={currentProduct}
            relatedProduct={product}
            closeModal={closeModal}
          />
        </div>
      )}
    </div>
  );
}

export default RelatedItemCard;
