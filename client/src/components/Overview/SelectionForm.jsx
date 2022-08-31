/* eslint-disable no-unused-vars */
import React from 'react';

function SelectionForm(props) {
  return (
    <div>
      <select name="size" id="size" defaultValue="Select Size">Size</select>
      <br />
      <br />
      <select name="quantity" id="quantity" defaultValue="-">Select quantity</select>
      <br />
      <br />
      <button type="submit">Add to cart</button>
    </div>
  );
}

export default SelectionForm;
