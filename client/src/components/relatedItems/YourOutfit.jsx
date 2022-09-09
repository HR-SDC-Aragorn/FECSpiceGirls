import React, { useState, useEffect } from 'react';
import Promise from 'bluebird';
import axios from 'axios';
import ListCarousel from './styleComponents.js';
import OutfitCard from './OutfitCard.jsx';

function YourOutfit({ currentProduct }) {
  const [outfitId, setOutfit] = useState([]);
  const [outfitData, setData] = useState([]);
  const [outfitStyle, setStyle] = useState([]);
  const [temp, setTemp] = useState(false);
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

  useEffect(() => {
    if (outfitId.length > 2) {
      setRelated(true);
    } else {
      setRelated(false);
    }
    if (outfitId.length) {
      getOutfitData();
    } else {
      setData([]);
      setStyle([]);
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
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      setRight2(false);
    }
  }

  function deleteItem(deleteId) {
    if (outfitId.length === 1) {
      setOutfit([]);
    } else {
      setOutfit(outfitId.filter((element) => (element !== deleteId)));
    }
  }

  function addItem() {
    if (!outfitId.includes(currentProduct.id)) {
      setOutfit([currentProduct.id, ...outfitId]);
    }
  }

  return (
    <div>
      <div className="outfit-title">YOUR OUTFIT</div>
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
              // key={outfit.name}
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
