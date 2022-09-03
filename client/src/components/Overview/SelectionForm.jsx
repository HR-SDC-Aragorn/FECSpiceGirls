/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Sizes from './Sizes.jsx';
import Quantities from './Quantities.jsx';

function SelectionForm({ stock }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState([]);
  const [stockLoaded, setStockLoaded] = useState(false);

  useEffect(() => {
    if (stock) {
      setStockLoaded(true);
    }
  }, [stock]);

  const handleSizeSelect = (newSize) => {
    setSelectedSize(newSize);
    const quantities = [];
    for (let i = 0; i < stock.length; i++) {
      if (stock[i].size === newSize) {
        const quantitiesMax = stock[i].quantity;
        for (let j = 1; j <= quantitiesMax; j++) {
          quantities.push(j);
        }
        const max15 = quantities.slice(0, 15);
        setQuantityOptions(max15);
      }
    }
  };

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
          <select name="size" id="size" onChange={(e) => handleSizeSelect(e.target.value)}>
            <option value="">Select Size</option>
            {stock.map((sizes) => (
              <Sizes
                key={sizes.quantity}
                size={sizes.size}
                handleSizeSelect={handleSizeSelect}
              />
            ))}
          </select>
          <select name="quantity" id="quantity">
            <option>      -     </option>
            {quantityOptions.map((quantity) => (
              <Quantities quantity={quantity} />
            ))}
          </select>
        </div>
      );
  }
}

export default SelectionForm;
