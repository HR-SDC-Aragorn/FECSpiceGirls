/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import StyleSelector from './StyleSelector.jsx';

function ProductInfo(props) {
  return (
    <div id="product-info" className="info-panel">
      <div id="stars">Star rating</div>
      <div id="category">{props.product.category}</div>
      <h1 id="name">{props.product.name}</h1>
      <p>{props.product.description}</p>
      <div className="share">
        <div id="share-fb">Share to FB</div>
        <div id="share-twitter">Share to Twitter</div>
        <div id="share-pinterest">Share to Pinterest</div>
      </div>
      <StyleSelector productID={props.product.id} />
    </div>
  );
}

export default ProductInfo;
