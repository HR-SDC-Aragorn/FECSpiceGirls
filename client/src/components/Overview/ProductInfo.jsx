/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import Style from './Style.jsx';
import SelectionForm from './SelectionForm.jsx';

function ProductInfo(props) {
  console.log(props.selectedStyle);
  return (
    <div id="product-info" className="info-panel">
      <div className="share">
        <span id="share-fb">Facebook</span>
        <span id="share-twitter">Twitter</span>
        <span id="share-pinterest">Pinterest</span>
      </div>
      <div id="stars">Star rating</div>
      <div id="category">{props.product.category}</div>
      <h1 id="name">{props.product.name}</h1>
      <p>{props.product.description}</p>
      <div>{`$${props.selectedStyle.original_price}`}</div>
      <div id="style-name">{`style>${props.selectedStyle.name}`}</div>
      <div id="style-thumbnails">
        {props.styles.map((style) => <Style key={style.style_id} style={style} />)}
      </div>
      <form>
        <SelectionForm stock={props.selectedStyle.skus} />
      </form>
    </div>
  );
}

export default ProductInfo;
