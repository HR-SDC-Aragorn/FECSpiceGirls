/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';

function Overview(props) {
  // get all product info
  // Pass product rating, category, title, price(?), overview to ProductInfo
  // Pass style, size, and stock info to StyleSelector
  return (
    <div>
      <ProductInfo />
      <StyleSelector />
      <ImageGallery />
    </div>
  );
}

export default Overview;
