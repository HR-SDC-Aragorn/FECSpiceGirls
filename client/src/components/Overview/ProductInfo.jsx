/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';

function ProductInfo(props) {
  return (
    <div id="product-info" className="info-panel">
      <div>Star rating</div>
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>
      <div>{props.product.default_price}</div>
      <div>{props.product.description}</div>
      <div>Share to FB</div>
      <div>Share to Twitter</div>
      <div>Share to Pinterest</div>
    </div>
  );
}

export default ProductInfo;
