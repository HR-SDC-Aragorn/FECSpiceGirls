/* eslint-disable no-unused-vars */
import React from 'react';

function SelectionForm(props) {
  console.log(props.stock);
  return (
    <div>
      <select name="size" id="size" defaultValue="Select Size">
        <option value="">Select Size</option>
      </select>
      <select name="quantity" id="quantity" defaultValue="-">
        <option value="">-</option>
      </select>
      <br />
      <br />
      <button type="submit">Add to cart</button>
    </div>
  );
}

export default SelectionForm;
