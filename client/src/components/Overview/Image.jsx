import React from 'react';

function Image(props) {
  return (
    <div>
      <img id="style-images" src={props.photo.url} alt="" />
    </div>
  );
}

export default Image;
