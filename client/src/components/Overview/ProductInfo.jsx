/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import Styles from './Styles.jsx';
import SelectionForm from './SelectionForm.jsx';
import Price from './Price.jsx';
import StarRating from './StarRating.jsx';

function ProductInfo({
  styles, selectedStyle, handleStyleSelect, product,
}) {
  const Category = styled.h5`
    text-transform: uppercase;
    padding-top: 30px;
    padding-bottom: 5px;
    margin-top: 0;
  `;
  const ProductName = styled.h1`
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 2px;
  `;

  const OverviewDetails = styled.div`
  border-top: dotted;
  border-bottom: dotted;
  border-color: black;
  margin-top: 30px;
  `;

  const CartAmount = styled.div`
  position: absolute;
  top: 70px;  /* always 10px lower than the cart */
  right: 12px;
  border: black;
  border-width: 1px;
  border-radius: 100%;
  padding: 2px;
  opacity: 75%;
  `;

  const Cart = styled.img`
  height: 25px;
  width: 30px;
  position: absolute;
  top: 85px;
  right: 20px;
  opacity: 75%;
  `;

  const StyleName = styled.h5`
  margin-bottom: 0px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  `;

  const [styleLoaded, setStyleLoaded] = useState(false);
  const [stock, setStock] = useState('');
  const [cartNumber, setCartNumber] = useState('');
  const [starRating, setStarRating] = useState('');

  useEffect(() => {
    if (styles) {
      setStyleLoaded(true);
    }
  }, [styles]);

  useEffect(() => {
    if (selectedStyle.skus) {
      setStock(Object.entries(selectedStyle.skus));
    }
  }, [selectedStyle]);

  useEffect(() => {
    axios.get('/cart')
      .then((res) => {
        let count = 0;
        for (let i = 0; i < res.data.length; i++) {
          count += Number(res.data[i].count);
        }
        setCartNumber(count);
      })
      .catch((err) => console.log(err));
  }, [cartNumber]);

  const starAverage = (starData) => {
    const ratingData = Object.entries(starData.ratings);
    let totalStars = 0;
    let weightedStars = 0;
    for (let i = 0; i < ratingData.length; i++) {
      totalStars += Number(ratingData[i][1]);
      weightedStars += Number(ratingData[i][0]) * Number(ratingData[i][1]);
    }
    let result = weightedStars / totalStars;
    result = result.toFixed(2);
    result = Number(result);
    setStarRating(result);
  };

  useEffect(() => {
    axios.get('/reviews/meta/', {
      params: {
        product_id: product.id,
      },
    })
      .then((results) => starAverage(results.data))
      .catch((err) => console.log('error getting ratings', err));
  }, [product]);

  const updateCart = (cartData) => {
    let count = 0;
    for (let i = 0; i < cartData.length; i++) {
      count += Number(cartData[i].count);
    }
    setCartNumber(count);
  };

  return (
    styleLoaded ? (
      <div>
        <div id="cart-feature">
          <Cart src="https://img.icons8.com/windows/2x/shopping-cart.png" alt="cart" />
          <CartAmount>{cartNumber}</CartAmount>
        </div>
        <div id="product-info" className="info-panel">
          <Category>
            PRODUCTS  /
            {' '}
            {product.category}
            {' '}
            /
          </Category>
          <ProductName>{product.name}</ProductName>
          <div className="star-rating">
            <div id="stars">
              {/* average stars: */}
              {/* {' '} */}
              {/* {starRating} */}
            </div>
            <StarRating starRating={starRating} />
          </div>
          <Price
            originalPrice={selectedStyle.original_price}
            salePrice={selectedStyle.sale_price}
          />
          <StyleName>{`STYLE     >     ${selectedStyle.name}`}</StyleName>
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
            <SelectionForm
              stock={stock}
              selectedStyle={selectedStyle}
              product={product}
              updateCart={updateCart}
            />
          </form>
          <OverviewDetails>
            <h5>PRODUCT DETAILS</h5>
            <p>{product.description}</p>
          </OverviewDetails>
        </div>
      </div>
    ) : ''
  );
}

export default ProductInfo;
