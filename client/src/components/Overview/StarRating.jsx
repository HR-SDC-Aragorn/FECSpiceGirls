import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

function StarRating({ starRating }) {
  const [stars, setStars] = useState('');
  const FilledStar = styled.span`
  color: #f08080;
  `;

  useEffect(() => {
    setStars(starRating);
  }, [starRating]);

  if (stars < 0.5) {
    return (
      <div>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
      </div>
    );
  } if (stars >= 0.5 && stars < 1.5) {
    return (
      <div>
        <FilledStar>&#9733;</FilledStar>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
      </div>
    );
  } if (stars >= 1.5 && stars < 2.5) {
    return (
      <div>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
      </div>
    );
  } if (stars >= 2.5 && stars < 3.5) {
    return (
      <div>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <span className="empty-star">&#9734;</span>
        <span className="empty-star">&#9734;</span>
      </div>
    );
  } if (stars >= 3.5 && stars < 4.5) {
    return (
      <div>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <span className="empty-star">&#9734;</span>
      </div>
    );
  } if (stars >= 4.5) {
    return (
      <div>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
        <FilledStar>&#9733;</FilledStar>
      </div>
    );
  }
}

export default StarRating;
