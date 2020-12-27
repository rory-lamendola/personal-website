import React, { Component, Image } from 'react';
import { render } from 'react-dom';



class Gallery extends Component {
  render() {
    return (
        <div class="gallery">
            <figure class="gallery__item gallery__item--1">
                <img src={require('../../components/images/crafts/IMG_0385.jpg')} class="gallery__img"></img>
            </figure>
            <figure class="gallery__item gallery__item--2">
                <img src={require('../../components/images/crafts/IMG_0389.jpg')} class="gallery__img"></img>
            </figure>
            <figure class="gallery__item gallery__item--3">
                <img src={require('../../components/images/crafts/IMG_0390.jpg')} class="gallery__img"></img>
            </figure>
            <figure class="gallery__item gallery__item--4">
                <img src={require('../../components/images/crafts/IMG_0165.jpg')} class="gallery__img"></img>
            </figure>
            <figure class="gallery__item gallery__item--5">
                <img src={require('../../components/images/crafts/IMG_8309.jpg')} class="gallery__img"></img>
            </figure>
        </div>
    );
  }
}

class GalleryImage extends Component {
    render() {
      return (   
        <figure class={`gallery__item gallery__item--${this.props.num}`}>
            <img src={require(this.props.src)} class="gallery__img"></img>
        </figure>   
      );
    }
  }

export default Gallery
export {Gallery, GalleryImage};