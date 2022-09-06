import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComparisonModal({ currentProduct, relatedProduct, closeModal }) {
  const [currChar, setCurrChar] = useState([]);
  const [relChar, setRelChar] = useState([]);
  const [uniqChar, setChar] = useState([]);

  function getUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const getCharacteristics = async () => {
    const current = await axios.get('/reviews', { params: { product_id: currentProduct.id } });
    const related = await axios.get('/reviews', { params: { product_id: relatedProduct.id } });
    const tempCurrKeys = Object.keys(current.data.characteristics);
    const tempRelKeys = Object.keys(related.data.characteristics);
    const uniqueChar = tempCurrKeys.concat(tempRelKeys).filter(getUnique);
    setChar(uniqueChar);
    const tempCurrValues = [];
    const tempRelValues = [];
    for (let i = 0; i < uniqueChar.length; ++i) {
      if (!current.data.characteristics[uniqueChar[i]]) {
        tempCurrValues.push(undefined);
      } else {
        tempCurrValues.push(Number(current.data.characteristics[uniqueChar[i]].value).toFixed(2));
      }
      if (!related.data.characteristics[uniqueChar[i]]) {
        tempRelValues.push(undefined);
      } else {
        tempRelValues.push(Number(related.data.characteristics[uniqueChar[i]].value).toFixed(2));
      }
    }
    setCurrChar(tempCurrValues);
    setRelChar(tempRelValues);
  };

  useEffect(() => {
    getCharacteristics();
  }, [null]);

  return (
    <div className="modal">
      <div className="modal-title">
        <h3>Comparing</h3>
      </div>
      <div className="x-close">
        <button type="button" className="x-button" onClick={closeModal}> x </button>
      </div>
      <table className="modal-table">
        <tr>
          <th>{currentProduct.name}</th>
          <th id="characteristic"> Characteristic</th>
          <th>{relatedProduct.name}</th>
        </tr>
        {uniqChar.map((element, index) => (
          <tr>
            <td>{currChar[index]}</td>
            <td>{element}</td>
            <td>{relChar[index]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ComparisonModal;
