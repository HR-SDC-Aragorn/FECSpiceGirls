/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Styles from './Styles.jsx';
import SelectionForm from './SelectionForm.jsx';
import Price from './Price.jsx';

function ProductInfo({
  styles, selectedStyle, handleStyleSelect, product,
}) {
  const [styleLoaded, setStyleLoaded] = useState(false);
  const [stock, setStock] = useState('');
  useEffect(() => {
    if (styles) {
      setStyleLoaded(true);
    }
  }, [styles]);

  useEffect(() => {
    if (selectedStyle.skus) {
      console.log(Object.entries(selectedStyle.skus));
      setStock(Object.entries(selectedStyle.skus));
    }
  }, [selectedStyle]);

  return (
    styleLoaded ? (
      <div>
        <div>
          <img id="cart" src="https://img.icons8.com/windows/2x/shopping-cart.png" alt="cart" />
        </div>
        <div id="product-info" className="info-panel">
          <div className="share">
            <span id="share-fb">Facebook</span>
            <span id="share-twitter">Twitter</span>
            <span id="share-pinterest">Pinterest</span>
          </div>
          <div id="stars">Star rating goes here</div>
          <div id="category">{product.category}</div>
          <h1 id="name">{product.name}</h1>
          <p>{product.description}</p>
          <Price
            originalPrice={selectedStyle.original_price}
            salePrice={selectedStyle.sale_price}
          />
          <div id="style-name">{`style     >     ${selectedStyle.name}`}</div>
          <div id="style-thumbnails">
            {styleLoaded ? (styles.map((style) => (
              <Styles
                key={style.style_id}
                style={style}
                handleStyleSelect={handleStyleSelect}
              />
            ))) : ''}
          </div>
          <form>
            <SelectionForm stock={stock} selectedStyle={selectedStyle} product={product} />
          </form>
        </div>
      </div>
    ) : ''
  );
}

export default ProductInfo;
