import React from 'react';

function Price(props) {
  if (props.originalPrice && !props.salePrice) {
    return (
      <div id="no-sale-price">{`$${props.originalPrice}`}</div>
    );
  }
  if (props.originalPrice && props.salePrice) {
    return (
      <div>
        <div id="sale-price">{`$${props.salePrice}`}</div>
        <div id="original-price">{`$${props.originalPrice}`}</div>
      </div>
    );
  }
}

export default Price;
