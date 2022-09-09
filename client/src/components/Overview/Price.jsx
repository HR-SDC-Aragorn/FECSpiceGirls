import React from 'react';

function Price(props) {
  return (
    <div>
      {props.originalPrice && props.salePrice
        ? (
          <>
            <div id="sale-price">{`$${props.salePrice}`}</div>
            <div id="original-price">{`$${props.originalPrice}`}</div>
          </>
        )
        : <div id="no-sale-price">{`$${props.originalPrice}`}</div>}

    </div>
  );
}

export default Price;
