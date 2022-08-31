/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import Image from './Image.jsx';

function ImageGallery(props) {
  if (props.selectedStylePhotos) {
    return (
      <div id="image-gallery">
        {props.selectedStylePhotos.map((photo) => <Image photo={photo} />)}
      </div>
    );
  }
}

export default ImageGallery;
