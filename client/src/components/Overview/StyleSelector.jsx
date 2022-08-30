/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

import Style from './Style.jsx';
import SelectionForm from './SelectionForm.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      selectedStyle: [],
      selectedStyleName: [],
      selectedStyleOriginalPrice: [],
      selectedStyleSalePrice: [],
      selectedStyleImages: [],
    };
  }

  componentDidMount() {
    axios.get('/products/65631/styles')
      .then((response) => (
        this.setState({
          styles: response.data.results,
          selectedStyle: response.data.results[0],
          selectedStyleName: response.data.results[0].name,
          selectedStyleOriginalPrice: response.data.results[0].original_price,
          selectedStyleSalePrice: response.data.results[0].sale_price,
          selectedStyleImages: response.data.results[0].photos,
        })
      ))
      .catch((err) => (
        console.log('ERROR GETTING PRODUCTS IN APP.JSX', err)
      ));
  }

  render() {
    console.log(this.state.selectedStyle);
    return (
      <div id="style-selector" className="info-panel">
        <div>{`$${this.state.selectedStyleOriginalPrice}`}</div>
        <div id="style-name">{`style  >  ${this.state.selectedStyleName}`}</div>
        <div id="style-thumbnails">
          {this.state.styles.map((style) => <Style key={style.style_id} style={style} />)}
        </div>
        <form>
          <SelectionForm />
        </form>

      </div>
    );
  }
}

export default StyleSelector;
