import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from '../Overview/StarRating.jsx';

function OutfitCard({ outfit, styles, deleteItem}) {
  const [defaultItems, setDefault] = useState({ original_price: outfit.default_price });
  const [avgRating, setRating] = useState(0);

  // const getRatings = async () => {
  //   const ratings = await axios.get('/reviews', { params: { product_id: outfit.id } });
  //   const numRatings = Object.values(ratings.data.ratings);
  //   const typeRatings = Object.keys(ratings.data.ratings);
  //   let sum = 0;
  //   let numCount = 0;
  //   for (let i = 0; i < numRatings.length; ++i) {
  //     sum += (numRatings[i] * typeRatings[i]);
  //     numCount += parseInt(numRatings[i], 10);
  //   }
  //   const avg = (Math.round((sum / numCount) * 4) / 4).toFixed(2);
  //   setRating(avg);
  // };

  useEffect(() => {
    if (outfit && styles) {
      for (let i = 0; i < styles.length; ++i) {
        if (styles[i]['default?']) {
          setDefault(styles[i]);
          break;
        }
      }
      axios.get('/reviews', { params: { product_id: outfit.id } })
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
  }, [outfit]);

  function deleteOutfit() {
    deleteItem(outfit.id);
  }

  return (
    <div>
      { outfit && styles && avgRating ? (
        <div className="each-list">
          <div className="x-remove">
            <button type="button" className="delete-item" onClick={deleteOutfit}>x</button>
          </div>
          <div className="related-image">
            {styles[0].photos[0].url
              ? <img src={styles[0].photos[0].url} alt="" />
              : <img src="https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg" alt="" />}
          </div>
          <div className="related-text">
            <div>
              {outfit.category}
            </div>
            <div className="product-name">
              {outfit.name}
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
    </div>
  );
}

export default OutfitCard;
