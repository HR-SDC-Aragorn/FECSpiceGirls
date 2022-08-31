/* eslint-disable no-unused-vars */
import React from 'react';
import Sizes from './Sizes.jsx';

class SelectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: [],
      selectedQuantity: [],
    };
  }

  render() {
    if (this.props.stock.length === 0) {
      return (
        <div>
          <select name="size" id="size" defaultValue="Select Size">
            <option value="">OUT OF STOCK</option>
          </select>
        </div>
      );
    }
    return (
      <div>
        <select name="size" id="size" defaultValue="Select Size">
          <option value="">Select Size</option>
          {this.props.stock.map((sizes) => <Sizes key={sizes.quantity} size={sizes.size} />)}
        </select>
      </div>
    );
  }
}

export default SelectionForm;
