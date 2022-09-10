import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import RelatedList from './RelatedList.jsx';
import YourOutfit from './YourOutfit.jsx';

function RelatedItems({ currentProduct, handleCurrent }) {
  const [relatedData, setRelated] = useState([]);
  const [styleData, setStyles] = useState([]);

  const getData = async () => {
    const related = await axios.get('/related', { params: { id: currentProduct.id } });
    const tempRelated = Promise.all(related.data.map((element) => axios.get('/productid', { params: { id: element } })));
    const tempStyle = Promise.all(related.data.map((element) => axios.get('/styles', { params: { id: element } })));
    const info = await Promise.all([tempRelated, tempStyle]);
    const tempInfo = [];
    const tempS = [];
    for (let i = 0; i < info[0].length; ++i) {
      tempInfo.push(info[0][i].data);
    }
    for (let i = 0; i < info[1].length; ++i) {
      tempS.push(info[1][i].data);
    }
    setRelated(tempInfo);
    setStyles(tempS);
  };

  useEffect(() => {
    if (currentProduct) {
      getData();
    }
  }, [currentProduct]);

  return (
    <div>
      <div>
        <RelatedList
          relatedData={relatedData}
          styleData={styleData}
          currentProduct={currentProduct}
          handleCurrent={handleCurrent}
        />
      </div>
      <div>
        <YourOutfit currentProduct={currentProduct} />
      </div>
    </div>
  );
}

export default RelatedItems;
