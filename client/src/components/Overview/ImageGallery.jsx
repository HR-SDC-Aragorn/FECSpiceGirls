/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import Image from './Image.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStylePhotos: [],
    };
  }

  componentDidMount() {
    axios.get('/products/65631/styles')
      .then((response) => (
        this.setState({
          selectedStylePhotos: response.data.results[0].photos,
        })
      ))
      .catch((err) => (
        console.log('ERROR GETTING PRODUCTS IN APP.JSX', err)
      ));
  }

  render() {
    return (
      <div>
        {this.state.selectedStylePhotos.map((photo) => <Image photo={photo} />)}
      </div>
    );
  }
}

export default ImageGallery;


