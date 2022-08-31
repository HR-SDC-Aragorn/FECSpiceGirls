/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import StyleSelector from './StyleSelector.jsx';

function ProductInfo(props) {
  return (
    <div id="product-info" className="info-panel">
      <div className="share">
        <div id="share-fb">Facebook</div>
        <div id="share-twitter">Twitter</div>
        <div id="share-pinterest">Pinterest</div>
      </div>
      <div id="stars">Star rating</div>
      <div id="category">{props.product.category}</div>
      <h1 id="name">{props.product.name}</h1>
      <div>price goes here</div>
      <p>{props.product.description}</p>
      <StyleSelector productID={props.product.id} />
    </div>
  );
}

export default ProductInfo;
