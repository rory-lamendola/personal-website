import React, { Component } from 'react'

const socialImgStyles = {
  display: 'inline-block',
  height: '30px',
  width: 'auto',
}

const socialDivStyle = {
  width: '200px',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed', 
  bottom:'25px',
  left: '2.5%'
}

class SocialMediaBar extends React.Component{
    render() {
        return (
            <div style={socialDivStyle}>
            <a href="https://github.com/rory-lamendola">
                <img src={require('./github.png')} style={socialImgStyles} /> 
            </a>
            <a href="https://www.linkedin.com/in/rory-lamendola-36847547/">
                <img src={require('./linkedin.png')} style={socialImgStyles} /> 
            </a>
            <a href="https://twitter.com/rorylamendola">
                <img src={require('./twitter.png')} style={socialImgStyles} /> 
            </a>
            <a href="https://www.instagram.com/rory.lamendola/">
                <img src={require('./instagram.png')} style={socialImgStyles} /> 
            </a>
            <a href="mailto:rory.lamendola@gmail.com">
                <img src={require('./email.png')} style={socialImgStyles} /> 
            </a>
            </div>
        )
      }
}

export default SocialMediaBar
