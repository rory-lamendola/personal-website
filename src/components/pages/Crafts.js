import React, { Component, Image } from 'react';
import { render } from 'react-dom';



class Crafts extends Component {
  render() {
    return (
      <div class="container">
          <h2>Crafts</h2>
          <div class="gallery">
              <figure class="gallery__item gallery__item--1">
                  <img src={require('../../components/images/crafts/IMG_0385.jpg')} alt="Gallery image 1" class="gallery__img"></img>
              </figure>
              <figure class="gallery__item gallery__item--2">
                  <img src={require('../../components/images/crafts/IMG_0389.jpg')} alt="Gallery image 2" class="gallery__img"></img>
              </figure>
              <figure class="gallery__item gallery__item--3">
                  <img src={require('../../components/images/crafts/IMG_0390.jpg')} alt="Gallery image 3" class="gallery__img"></img>
              </figure>
              <figure class="gallery__item gallery__item--4">
                  <img src={require('../../components/images/crafts/IMG_0165.jpg')} alt="Gallery image 4" class="gallery__img"></img>
              </figure>
              <figure class="gallery__item gallery__item--5">
                  <img src={require('../../components/images/crafts/IMG_8309.jpg')} alt="Gallery image 5" class="gallery__img"></img>
              </figure>
          </div>
      </div>
      // <div class="container">
      //   <div class="gallery" style={galleryStyle}>
      //     <img src={require('../../components/images/crafts/IMG_0385.jpg')} style={galleryImgStyle}></img>
      //     <img src={require('../../components/images/crafts/IMG_0389.jpg')} style={galleryImgStyle}></img>
      //     <img src={require('../../components/images/crafts/IMG_0390.jpg')} style={galleryImgStyle}></img>
      //     <img src={require('../../components/images/crafts/IMG_0165.jpg')} style={galleryImgStyle}></img>
      //   </div>
      //   </div>
      
// <img src={require('../../components/images/crafts/IMG_0385.jpg')} style={styles}/>
//         <img src={require('../../components/images/crafts/IMG_0385.jpg')} style={styles}/>
//         <img src={require('../../components/images/crafts/IMG_0385.jpg')} style={styles}/>

    );
  }
}

export default Crafts;