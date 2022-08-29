/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

import Style from './Style.jsx';

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
    return (
      <div id="style-selector" className="info-panel">
        <div id="style-thumbnails">
          {this.state.styles.map((style) => <Style key={style.style_id} style={style} />)}
        </div>
        <div>Select Size</div>
        <div>Select Quantity</div>
        <div>Add to cart</div>
      </div>
    );
  }
}

export default StyleSelector;
