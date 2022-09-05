import React from 'react';

function Sizes({ size, sku }) {
  return (
    <option value={sku}>{size}</option>
  );
}

export default Sizes;
