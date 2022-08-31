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

  componentDidUpdate() {
    if (this.props.product.id !== undefined && this.state.styles.length === 0) {
      axios.get(`/products/${this.props.product.id}/styles`)
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
  }

  // accepts clicked on style thumbnail from the Style component
  handleStyleSelect(selectedStyle) {
    console.log(selectedStyle);
    // this.setState({
    // selectedStyle: selectedStyle
    // })
  }

  render() {
    return (
      <div id="overview">
        <ImageGallery selectedStylePhotos={this.state.selectedStyle.photos} />
        <ProductInfo
          product={this.props.product}
          styles={this.state.styles}
          selectedStyle={this.state.selectedStyle}
          handleStyleSelect={() => this.handleStyleSelect()}
        />
      </div>
    );
  }
}

export default Overview;
