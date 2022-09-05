import React from 'react';

function StarRating({ starRating }) {
  if (starRating < 0.5) {
    return (
      <div>
        <span id="star-1">&#9734;</span>
        <span id="star-2">&#9734;</span>
        <span id="star-3">&#9734;</span>
        <span id="star-4">&#9734;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  }
  if (starRating >= 0.5 && starRating < 1.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9734;</span>
        <span id="star-3">&#9734;</span>
        <span id="star-4">&#9734;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  }
  if (starRating >= 1.5 && starRating < 2.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9733;</span>
        <span id="star-3">&#9734;</span>
        <span id="star-4">&#9734;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  }
  if (starRating >= 2.5 && starRating < 3.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9733;</span>
        <span id="star-3">&#9733;</span>
        <span id="star-4">&#9734;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  }
  if (starRating >= 3.5 && starRating < 4.5) {
    return (
      <div>
        <span id="star-1">&#9733;</span>
        <span id="star-2">&#9733;</span>
        <span id="star-3">&#9733;</span>
        <span id="star-4">&#9733;</span>
        <span id="star-5">&#9734;</span>
      </div>
    );
  }
  if (starRating >= 4.5) {
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
