/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';

function Overview(props) {
  return (
    <div>
      <ProductInfo />
      <StyleSelector />
      <ImageGallery />
    </div>
  );
}

export default Overview;
