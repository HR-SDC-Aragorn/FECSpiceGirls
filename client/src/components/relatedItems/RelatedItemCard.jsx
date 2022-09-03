import React from 'react';

function RelatedItemCard(props) {
  return (
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
          {props.product.default_price}
        </div>
      </div>
    </div>
  );
}

export default RelatedItemCard;
