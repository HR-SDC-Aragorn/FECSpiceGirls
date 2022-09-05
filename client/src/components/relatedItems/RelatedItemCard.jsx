import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RelatedItemCard(props) {
  const [defaultItems, setDefault] = useState({ original_price: props.product.default_price });
  const [avgRating, setRating] = useState(0);

  const getRatings = async () => {
    const ratings = await axios.get('/reviews', { params: { product_id: props.product.id } });
    const numRatings = Object.values(ratings.data.ratings);
    const typeRatings = Object.keys(ratings.data.ratings);
    // console.log('first', numRatings);
    // console.log('first', typeRatings);
    let sum = 0;
    let numCount = 0;
    for (let i = 0; i < numRatings.length; ++i) {
      sum += (numRatings[i] * typeRatings[i]);
      numCount += parseInt(numRatings[i], 10);
    }
    // console.log('second', sum);
    // console.log('third', numCount);
    const avg = (Math.round((sum / numCount) * 4) / 4).toFixed(2);
    setRating(avg);
  };

  useEffect(() => {
    for (let i = 0; i < props.style.length; ++i) {
      if (props.style[i]['default?']) {
        setDefault(props.style[i]);
        break;
      }
    }
    getRatings();
  }, [props]);

  return (
    <div>
      <div className="each-list">
        <div className="related-image">
          {props.style[0].photos[0].url
            ? <img src={props.style[0].photos[0].url} alt="" />
            : <img src="https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg" alt="" />}
        </div>
        <div className="related-text">
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
    </div>
  );
}

export default RelatedItemCard;
