/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Sizes from './Sizes.jsx';

function SelectionForm({ stock }) {
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState([]);
  const [stockLoaded, setStockLoaded] = useState(false);

  useEffect(() => {
    if (stock) {
      setStockLoaded(true);
    }
  }, [stock]);

  if (stockLoaded) {
    if (!stock[0].size) {
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
          {stock.map((sizes) => <Sizes key={sizes.quantity} size={sizes.size} />)}
        </select>
      </div>
    );
  }
}

export default SelectionForm;
