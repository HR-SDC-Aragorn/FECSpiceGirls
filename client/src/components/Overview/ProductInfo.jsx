/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Styles.jsx';
import SelectionForm from './SelectionForm.jsx';
import Price from './Price.jsx';

function ProductInfo(props) {
  if (props.selectedStyle.skus !== undefined) {
    const stock = Object.values(props.selectedStyle.skus);
    return (
      <div id="product-info" className="info-panel">
        <div className="share">
          <span id="share-fb">Facebook</span>
          <span id="share-twitter">Twitter</span>
          <span id="share-pinterest">Pinterest</span>
        </div>
        <div id="stars">Star rating goes here</div>
        <div id="category">{props.product.category}</div>
        <h1 id="name">{props.product.name}</h1>
        <p>{props.product.description}</p>
        <Price
          originalPrice={props.selectedStyle.original_price}
          salePrice={props.selectedStyle.sale_price}
        />
        <div id="style-name">{`style     >     ${props.selectedStyle.name}`}</div>
        <div id="style-thumbnails">
          {props.styles.map((style) => <Styles key={style.style_id} style={style} />)}
        </div>
        <form>
          <SelectionForm stock={stock}/>
        </form>
      </div>
    );
  }
}

export default ProductInfo;
