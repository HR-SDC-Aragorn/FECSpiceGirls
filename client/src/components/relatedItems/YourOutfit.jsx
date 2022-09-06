import React, { useState, useEffect } from 'react';
import Promise from 'bluebird';
import axios from 'axios';
import ListCarousel from './styleComponents.js';
import OutfitCard from './OutfitCard.jsx';

function YourOutfit({ currentProduct }) {
  const [outfitId, setOutfit] = useState([]);
  const [outfitData, setData] = useState([]);
  const [outfitStyle, setStyle] = useState([]);
  const [isLeft2, setLeft2] = useState(false);
  const [isRight2, setRight2] = useState(true);
  const [relatedArrows, setRelated] = useState(false);

  const getOutfitData = async () => {
    const tempRelated = Promise.all(outfitId.map((element) => axios.get('/productid', { params: { id: element } })));
    const tempStyle = Promise.all(outfitId.map((element) => axios.get('/styles', { params: { id: element } })));
    const data = await Promise.all([tempRelated, tempStyle]);
    const tempData = [];
    const tempOutStyle = [];
    for (let i = 0; i < data[0].length; ++i) {
      tempData.push(data[0][i].data);
    }
    for (let i = 0; i < data[1].length; ++i) {
      tempOutStyle.push(data[1][i].data);
    }
    setData(tempData);
    setStyle(tempOutStyle);
  };

  // const getOutfitData = async () => {
  //   const tempData = [];
  //   const tempStyle = [];
  //   await Promise.all(outfitId.map((element) => {
  //     axios.get('/productid', { params: { id: element } })
  //       .then((res) => {
  //         tempData.push(res.data);
  //       });
  //   }));
  //   await Promise.all(outfitId.map((element) => {
  //     axios.get('styles', { params: { id: element } })
  //       .then((response) => {
  //         tempStyle.push(response.data);
  //       });
  //   }));
  //   setData(tempData);
  //   setStyle(tempStyle);
  // };

  useEffect(() => {
    if (outfitId.length > 2) {
      setRelated(true);
    }
    // if (!setOutfit.length) {
    //   const temp = helpers.getOutfit();
    //   setOutfit(temp);
    // } else {
    if (outfitId.length) {
      getOutfitData();
    }
  }, [outfitId]);

  function leftScroll2() {
    setRight2(true);
    const carousel = document.getElementById('outfits');
    // console.log(carousel.scrollLeft);
    carousel.scrollLeft -= 305;
    if (carousel.scrollLeft === 0) {
      setLeft2(false);
    }
  }

  function rightScroll2() {
    setLeft2(true);
    const carousel = document.getElementById('outfits');
    carousel.scrollLeft += 305;
    if (carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth)) {
      setRight2(false);
    }
  }

  function deleteItem(deleteId) {
    helpers.deleteOutfit();
    const temp = helpers.getOutfit();
    setOutfit(temp);
  }

  function addItem() {
    // helpers.addOutfit(currentProduct.id);
    // const temp = helpers.getOutfit();
    // setOutfit(temp);
    // console.log(outfitId);
    if (!outfitId.includes(currentProduct.id)) {
      setOutfit([currentProduct.id, ...outfitId]);
    }
  }

  return (
    <div>
      <h2>Your Outfit</h2>
      {isLeft2 && relatedArrows ? (
        <div className="left-button">
          <button type="button" className="arrow left" onClick={leftScroll2}>Left Arrow</button>
        </div>
      ) : null}
      {isRight2 && relatedArrows ? (
        <div className="right-button">
          <button type="button" className="arrow right" onClick={rightScroll2}>Right Arrow</button>
        </div>
      ) : null}
      <ListCarousel id="outfits">
        <div className="each-list">
          <h1 className="your-outfit"> Add To Outfit </h1>
          <button type="button" className="add-item" onClick={addItem}> + </button>
        </div>
        {outfitData.length
          ? outfitData.map((outfit, index) => (
            <OutfitCard
              outfit={outfit}
              key={outfit.id}
              styles={outfitStyle[index].results}
              deleteItem={deleteItem}
            />
          ))
          : null}
      </ListCarousel>
    </div>
  );
}

export default YourOutfit;
