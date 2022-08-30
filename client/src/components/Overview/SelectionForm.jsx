/* eslint-disable no-unused-vars */
import React from 'react';

function SelectionForm(props) {
  return (
    <div>
      <select name="size" id="size">Select size</select>
      <br />
      <br />
      <select name="quantity" id="quantity">Select quantity</select>
      <br />
      <br />
      <button type="submit">Add to cart</button>
    </div>
  );
}

export default SelectionForm;
