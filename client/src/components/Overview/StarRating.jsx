import React, { useEffect, useState } from 'react';

function StarRating({ starRating }) {
  const [stars, setStars] = useState('');

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
          <span className="filled-star">&#9733;</span>
          <span className="empty-star">&#9734;</span>
          <span className="empty-star">&#9734;</span>
          <span className="empty-star">&#9734;</span>
          <span className="empty-star">&#9734;</span>
        </div>
      );
    } if (stars >= 1.5 && stars < 2.5) {
      return (
        <div>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="empty-star">&#9734;</span>
          <span className="empty-star">&#9734;</span>
          <span className="empty-star">&#9734;</span>
        </div>
      );
    } if (stars >= 2.5 && stars < 3.5) {
      return (
        <div>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="empty-star">&#9734;</span>
          <span className="empty-star">&#9734;</span>
        </div>
      );
    } if (stars >= 3.5 && stars < 4.5) {
      return (
        <div>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="empty-star">&#9734;</span>
        </div>
      );
    } if (stars >= 4.5) {
      return (
        <div>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
          <span className="filled-star">&#9733;</span>
        </div>
      );
  }
}

export default StarRating;
