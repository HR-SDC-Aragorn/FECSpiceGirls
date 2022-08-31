/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Styles(props) {
  if (props.style.photos[0].thumbnail_url) {
    return (
      <div>
        <img id="style-thumbnail" src={props.style.photos[0].thumbnail_url} alt={props.style.name} />
      </div>
    );
  }
}

export default Styles;
