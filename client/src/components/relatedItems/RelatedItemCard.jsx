import React from 'react';

function RelatedItemCard(props) {
  return (
    <ul id="related-item">
      <div id="each-list">
        <li>
          {props.style[0].photos[0].url
            ? <img src={props.style[0].photos[0].url} alt="" />
            : <img src="https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg" alt="" />}
        </li>
        <li>
          {props.product.category}
        </li>
        <li>
          {props.product.name}
        </li>
        <li>
          {props.product.default_price}
        </li>
      </div>
    </ul>
  );
}

export default RelatedItemCard;
