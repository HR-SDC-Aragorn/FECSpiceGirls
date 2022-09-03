import React from 'react';

function Quantities({ quantity }) {
  return (
    <option value={quantity}>{quantity}</option>
  );
}

export default Quantities;