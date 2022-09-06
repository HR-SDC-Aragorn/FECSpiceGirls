import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx';

function RelatedItemCard(props) {
  const [defaultItems, setDefault] = useState({ original_price: props.product.default_price });
  const [avgRating, setRating] = useState(0);
  const [popup, setPopup] = useState(false);

  const getRatings = async () => {
    const ratings = await axios.get('/reviews', { params: { product_id: props.product.id } });
    const numRatings = Object.values(ratings.data.ratings);
    const typeRatings = Object.keys(ratings.data.ratings);
    let sum = 0;
    let numCount = 0;
    for (let i = 0; i < numRatings.length; ++i) {
      sum += (numRatings[i] * typeRatings[i]);
      numCount += parseInt(numRatings[i], 10);
    }
    const avg = (Math.round((sum / numCount) * 4) / 4).toFixed(2);
    setRating(avg);
  };

  useEffect(() => {
    if (props.product) {
      for (let i = 0; i < props.style.length; ++i) {
        if (props.style[i]['default?']) {
          setDefault(props.style[i]);
          break;
        }
      }
      getRatings();
    }
  }, [props]);

  function openModal() {
    setPopup(true);
  }

  function closeModal() {
    setPopup(false);
  }

  function onChange() {
    props.handleCurrent(props.product.id);
  }

  return (
    <div>
      {props.product && (
        <div className="each-list">
          <div className="star-div">
            <button type="button" className="star-button" onClick={openModal}> &#9734; </button>
          </div>
          <div className="related-image">
            {props.style[0].photos[0].url
              ? <img src={props.style[0].photos[0].url} alt="" />
              : <img src="https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg" alt="" />}
          </div>
          <div className="related-text" onClick={onChange}>
            <div>
              {props.product.category}
            </div>
            <div>
              {props.product.name}
            </div>
            <div>
              {defaultItems.sale_price
                ? (
                  <div className="sale-price">
                    {' '}
                    {defaultItems.sale_price}
                    {' '}
                    <div className="discount">
                      {' '}
                      {defaultItems.original_price}
                      {' '}
                    </div>
                    {' '}

                  </div>
                )
                : (
                  <div>
                    {' '}
                    {defaultItems.original_price}
                    {' '}
                  </div>
                )}
            </div>
            <div className="ratings">
              {avgRating}
            </div>
          </div>
        </div>
      )}
      {popup && (
        <div>
          <ComparisonModal
            currentProduct={props.currentProduct}
            relatedProduct={props.product}
            closeModal={closeModal}
          />
        </div>
      )}
    </div>
  );
}

export default RelatedItemCard;
