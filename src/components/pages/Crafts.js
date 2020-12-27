import React, { Component, Image } from 'react';
import { render } from 'react-dom';

import {Gallery, GalleryImage} from '../gallery'

function craftPath(img) {
    return `../../components/images/crafts/${img}`
}

class Crafts extends Component {
  render() {
    const imageList = [
        'IMG_0385.jpg', 
        'IMG_0389.jpg', 
        'IMG_0390.jpg',
        'IMG_0165.jpg',
        'IMG_8309.jpg'
    ]
    const images = imageList.map((img, index) => {
        return (
            <GalleryImage src={craftPath(img)} num={index}></GalleryImage>
        )
      })

    return (
        
      <div class="container">
          <h2>Crafts</h2>
          <Gallery>
              {images}
          </Gallery>
      </div>
    );
  }
}

export default Crafts;