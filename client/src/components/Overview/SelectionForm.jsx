import React from 'react';

function SelectionForm(props) {
  return (
    <div>
        <select name="size" id="size">Select size</select>
        <br></br>
        <br></br>
        <select name="quantity" id="quantity">Select quantity</select>
        <br></br>
        <br></br>
        <button type="submit">Add to cart</button>
    </div>
  )
}