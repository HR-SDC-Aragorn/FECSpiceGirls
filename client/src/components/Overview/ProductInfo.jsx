/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import StyleSelector from './StyleSelector.jsx';

function ProductInfo(props) {
  return (
    <div id="product-info" className="info-panel">
      <div>Star rating</div>
      <div id="category">{props.product.category}</div>
      <div id="name">{props.product.name}</div>
      <div>{props.product.description}</div>
      <div className="share">
        <br></br>
        <div className="share fb">Share to FB</div>
        <br></br>
        <div className="share twitter">Share to Twitter</div>
        <br></br>
        <div className="share pinterest">Share to Pinterest</div>
        <br></br>
      </div>
      <StyleSelector productID={props.product.id} />
    </div>
  );
}

export default ProductInfo;
