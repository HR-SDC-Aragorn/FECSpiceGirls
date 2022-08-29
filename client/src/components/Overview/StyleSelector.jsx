/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products/65631/styles')
      .then((response) => (
        this.setState({
          styles: response.data.results,
        })
      ))
      .catch((err) => (
        console.log('ERROR GETTING PRODUCTS IN APP.JSX', err)
      ));
  }

  render() {
    console.log(this.state.styles);
    return (
      <div id="style-selector" className="info-panel">
        <div>Style selector</div>
        <div>Select Size</div>
        <div>Select Quantity</div>
        <div>Add to cart</div>
      </div>
    );
  }
}

export default StyleSelector;
