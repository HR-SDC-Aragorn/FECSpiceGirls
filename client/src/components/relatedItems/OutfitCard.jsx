import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OutfitCard(props) {
  const [defaultItems, setDefault] = useState({ original_price: props.outfit.default_price });
  const [avgRating, setRating] = useState(0);

  const getRatings = async () => {
    const ratings = await axios.get('/reviews', { params: { product_id: props.outfit.id } });
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
    if (props.outfit) {
      for (let i = 0; i < props.styles.length; ++i) {
        if (props.styles[i]['default?']) {
          setDefault(props.styles[i]);
          break;
        }
      }
      getRatings();
    }
  }, [props]);

  return (
    <div>
      { props.outfit && (
        <div className="each-list">
          <div className="x-remove">
            <button type="button" className="delete-item" onClick={props.deleteItem}> x </button>
          </div>
          <div className="related-image">
            {props.styles[0].photos[0].url
              ? <img src={props.styles[0].photos[0].url} alt="" />
              : <img src="https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg" alt="" />}
          </div>
          <div className="related-text">
            <div>
              {props.outfit.category}
            </div>
            <div>
              {props.outfit.name}
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
    </div>
  );
}

export default OutfitCard;
