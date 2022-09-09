import React, { useEffect, useState } from 'react';

function StarRating({ starRating }) {
  const [stars, setStars] = useState(starRating);

  useEffect(() => {
    setStars(starRating);
  }, [starRating]);

  if (stars < 0.5) {
    return (
      <div>
        <span id="star-1">&#9734;</span>
        <span id="star-2">&#9734;</span>
        <span id="star-3">&#9734;</span>
        <span id="star-4">&#9734;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  } if (stars >= 0.5 && stars < 1.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9734;</span>
        <span id="star-3">&#9734;</span>
        <span id="star-4">&#9734;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  } if (stars >= 1.5 && stars < 2.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9733;</span>
        <span id="star-3">&#9734;</span>
        <span id="star-4">&#9734;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  } if (stars >= 2.5 && stars < 3.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9733;</span>
        <span id="star-3">&#9733;</span>
        <span id="star-4">&#9734;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  } if (stars >= 3.5 && stars < 4.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9733;</span>
        <span id="star-3">&#9733;</span>
        <span id="star-4">&#9733;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  } if (stars >= 4.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9733;</span>
        <span id="star-3">&#9733;</span>
        <span id="star-4">&#9733;</span>
        <span id="star-5">&#9733;</span>
      </div>
    );
  }
}

export default StarRating;
