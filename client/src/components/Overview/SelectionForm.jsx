/* eslint-disable no-unused-vars */
import React from 'react';
import Sizes from './Sizes.jsx';

class SelectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: [],
      selectedQuantity: [],
      stock: [],
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
    console.log(this.props.stock);
    return (
      <div>
        <select name="size" id="size" defaultValue="Select Size">
          <option value="">Select Size</option>
          {this.props.stock.map((sizes) => <Sizes key={sizes.quantity} size={sizes.size} />)}
          {/* <option value={this.props.stock[0].size}>{this.props.stock[0].size}</option>
          <option value={this.props.stock[1].size}>{this.props.stock[1].size}</option>
          <option value={this.props.stock[2].size}>{this.props.stock[2].size}</option>
          <option value={this.props.stock[3].size}>{this.props.stock[3].size}</option>
          <option value={this.props.stock[4].size}>{this.props.stock[4].size}</option>
          <option value={this.props.stock[5].size}>{this.props.stock[5].size}</option> */}
        </select>
      </div>
    );
  }
}

export default SelectionForm;
