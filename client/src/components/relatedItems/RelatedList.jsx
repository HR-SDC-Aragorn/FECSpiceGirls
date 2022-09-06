import React, { useState, useEffect } from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import ListCarousel from './styleComponents.js';

function RelatedList({ relatedData, styleData, currentProduct, handleCurrent }) {
  const [isLeft, setLeft] = useState(false);
  const [isRight, setRight] = useState(true);
  const [relatedArrows, setRelated] = useState(false);

  useEffect(() => {
    const carousel = document.getElementById('related-carousel');
    if (carousel.scrollWidth > carousel.clientWidth) {
      setRelated(true);
    }
  }, [relatedData]);

  function leftScroll() {
    setRight(true);
    const carousel = document.getElementById('related-carousel');
    // console.log(carousel.scrollLeft);
    // carousel.scrollLeft -= (carousel.scrollWidth - carousel.clientWidth);
    carousel.scrollLeft -= 305;
    if (carousel.scrollLeft === 0) {
      setLeft(false);
    }
  }

  function rightScroll() {
    setLeft(true);
    const carousel = document.getElementById('related-carousel');
    // carousel.scrollLeft += (carousel.scrollWidth - carousel.clientWidth);
    carousel.scrollLeft += 305;
    if (carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth)) {
      setRight(false);
    }
  }

  return (
    <div>
      <div>
        <h2>Related Products</h2>
        {isLeft && relatedArrows ? (
          <div className="left-button">
            <button type="button" className="arrow left" onClick={leftScroll}>Left Arrow</button>
          </div>
        ) : null}
        {isRight && relatedArrows ? (
          <div className="right-button">
            <button type="button" className="arrow right" onClick={rightScroll}>Right Arrow</button>
          </div>
        ) : null}
        <ListCarousel id="related-carousel">
          {relatedData.map((product, index) => (
            <RelatedItemCard
              product={product}
              key={product.id}
              style={styleData[index].results}
              currentProduct={currentProduct}
              handleCurrent={handleCurrent}
            />
          ))}
        </ListCarousel>
      </div>
    </div>
  );
}

export default RelatedList;
