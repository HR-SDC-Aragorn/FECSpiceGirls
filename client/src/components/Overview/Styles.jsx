/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Styles(props) {
  return (
    <div>
      { props.style.photos[0].thumbnail_url
        ? (
          <img
            id="style-thumbnail"
            src={props.style.photos[0].thumbnail_url}
            alt={props.style.name}
            onClick={() => props.handleStyleSelect(props.style)}
          />
        )
        : (
          <img
            id="style-thumbnail"
            src="https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg"
            alt={props.style.name}
            onClick={() => props.handleStyleSelect(props.style)}
          />
        )}
    </div>
  );
}

export default Styles;
