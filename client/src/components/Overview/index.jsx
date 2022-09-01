/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';

function Overview({ product }) {
  // const { product } = props;
  const [styles, setStyles] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  useEffect(() => {
    console.log("initial overview product", product);
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

  useEffect(() => {
    if (styles.length !== 0) {
      console.log('styles', styles);
    }
  }, [styles]);
  // accepts clicked on style thumbnail from the Style component
  const handleStyleSelect = (newStyle) => {
    console.log('selectedStyle', newStyle);
    setSelectedStyles(newStyle);
  };

  console.log('prop drilling check index', product, styles, selectedStyles);
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

// class Overview extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       styles: [],
//       selectedStyle: [],
//     };
//   }

// componentDidUpdate() {
//   if (this.props.product.id !== undefined && this.state.styles.length === 0) {
//     axios.get(`/products/${this.props.product.id}/styles`)
//       .then((response) => (
//         this.setState({
//           styles: response.data.results,
//           selectedStyle: response.data.results[0],
//         })
//       ))
//       .catch((err) => (
//         console.log('ERROR GETTING PRODUCTS IN APP.JSX', err)
//       ));
//   }
// }

//   // accepts clicked on style thumbnail from the Style component
//   handleStyleSelect(newStyle) {
//     console.log("selectedStyle", newStyle);
//     // this.setState({
//     //   selectedStyle: newStyle,
//     // });
//   }

//   render() {
//     return (
//       <div id="overview">
//         <ImageGallery selectedStylePhotos={this.state.selectedStyle.photos} />
//         <ProductInfo
//           product={this.props.product}
//           styles={this.state.styles}
//           selectedStyle={this.state.selectedStyle}
//           handleStyleSelect={this.handleStyleSelect}
//         />
//       </div>
//     );
//   }
// }

export default Overview;
