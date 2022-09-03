/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';

function Overview({ product }) {
  const [styles, setStyles] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  useEffect(() => {
    if (product) {
      axios.get(`/products/${product.id}/styles`)
        .then((response) => (
          setStyles(response.data.results),
          setSelectedStyles(response.data.results[0])
        ))
        .catch((err) => (
          console.log('ERROR GETTING PRODUCTS IN INDEX.JSX', err)
        ));
    }
  }, [product]);

  const handleStyleSelect = (newStyle) => {
    setSelectedStyles(newStyle);
  };

  return (
    (product && styles && selectedStyles) ? (
      <div id="overview">
        <ImageGallery selectedStylePhotos={selectedStyles.photos} />
        <ProductInfo
          product={product}
          styles={styles}
          selectedStyle={selectedStyles}
          handleStyleSelect={handleStyleSelect}
        />
      </div>
    ) : ''
  );
}

export default Overview;
