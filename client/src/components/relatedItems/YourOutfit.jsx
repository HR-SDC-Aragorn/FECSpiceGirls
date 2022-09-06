import React, { useState, useEffect } from 'react';
import Promise from 'bluebird';
import axios from 'axios';
import ListCarousel from './styleComponents.js';
import OutfitCard from './OutfitCard.jsx';
// import addOutfit from './OutfitStorage.js';
// import getOutfit from './OutfitStorage.js';
// import deleteOutfit from './OutfitStorage.js';

function YourOutfit({ currentProduct }) {
  const [outfitId, setOutfit] = useState([]);
  const [outfitData, setData] = useState([]);
  const [outfitStyle, setStyle] = useState([]);
  const [isLeft2, setLeft2] = useState(false);
  const [isRight2, setRight2] = useState(true);
  const [relatedArrows, setRelated] = useState(false);

  const getOutfitData = async () => {
    const tempData = [];
    const tempStyle = [];
    await Promise.all(outfitId.map((element) => {
      axios.get('/productid', { params: { id: element } })
        .then((res) => {
          tempData.push(res.data);
        });
    }));
    await Promise.all(outfitId.map((element) => {
      axios.get('styles', { params: { id: element } })
        .then((response) => {
          tempStyle.push(response.data);
        });
    }));
    setData(tempData);
    setStyle(tempStyle);
  };

  useEffect(() => {
    const carousel = document.getElementById('outfits');
    if (carousel.scrollWidth > carousel.clientWidth) {
      setRelated(true);
    }
    if (outfitId.length) {
      getOutfitData();
    }
  }, [outfitId]);

  function leftScroll2() {
    setRight2(true);
    const carousel = document.getElementById('outfits');
    // console.log(carousel.scrollLeft);
    carousel.scrollLeft -= (carousel.scrollWidth - carousel.clientWidth);
    if (carousel.scrollLeft === 0) {
      setLeft2(false);
    }
  }

  function rightScroll2() {
    setLeft2(true);
    const carousel = document.getElementById('outfits');
    carousel.scrollLeft += (carousel.scrollWidth - carousel.clientWidth);
    if (carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth)) {
      setRight2(false);
    }
  }

  function deleteItem(deleteId) {
    const newOutfitId = [...outfitId];
    for (let i = 0; i < newOutfitId.length; ++i) {
      if (deleteId === newOutfitId[i]) {
        newOutfitId.splice(i, 1);
        break;
      }
    }
    setOutfit(newOutfitId);
  }

  function addItem() {
    setOutfit([...outfitId, currentProduct.id]);
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
        {console.log(outfitData)}
        {console.log(outfitStyle)}
        {outfitData.length !== 0
          ? outfitData.map((outfit, index) => (
            <div>
              <OutfitCard
                outfit={outfit}
                key={outfit.id}
                styles={outfitStyle[index].results}
                deleteItem={deleteItem}
              />
            </div>
          ))
          : null}
      </ListCarousel>
    </div>
  );
}

export default YourOutfit;
