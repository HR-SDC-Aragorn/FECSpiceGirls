/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      selectedStyle: [],
    };
  }

  componentDidMount() {
    axios.get('/products/65631/styles')
      .then((response) => (
        this.setState({
          styles: response.data.results,
          selectedStyle: response.data.results[0],
        })
      ))
      .catch((err) => (
        console.log('ERROR GETTING PRODUCTS IN APP.JSX', err)
      ));
  }

  // get all product info
  // Pass product rating, category, title, price(?), overview to ProductInfo
  // Pass style, size, and stock info to StyleSelector
  render() {
    console.log("index styles state", this.state.styles);
    return (
      <div id="overview">
        <ImageGallery selectedStylePhotos={this.state.selectedStyle.photos} />
        <ProductInfo product={this.props.product} styles={this.state.styles} />
      </div>
    );
  }
}

export default Overview;
