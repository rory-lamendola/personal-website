import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';


import About from './About'
import Home from './Home'
import Resume from './Resume'
import Crafts from './Crafts'
import SocialMediaBar from '../social';

const cream = '#FFF9E9'
const sage = "#92A895"

const linkStyle = {
  textDecoration: 'none',
  color: cream,
  textAlign: "center"
}
const homeStyle = {
  fontFamily: 'Stanley',
  fontSize: '90px',
}

const leftStyle = {
  position: "absolute",
  left: "0",
  top: "0",
  bottom: "0"
}

const pageStyle = {
  position: "absolute",
  right: 0,
  bottom: 0,
  top: 0,
  left: 100,
  color:'#39493E',
  background: '#FFFDF6',
  overflow: "auto"
}

class Navigation extends React.Component{
    render() {
        return (
        <Router>
          <SplitPane
            split="vertical"
            defaultSize={200}
            style = {{background: sage, color: cream}}
          >
            <menu style= {leftStyle}>
              <div><h1><Link to="/personal-website" style={linkStyle}>Rory</Link></h1></div>
              <div style={{ fontFamily: 'LemonMilk'}}>
                <div style={{fontSize: '25px'}}>Denver/Remote based software engineer and craft enthusiast.</div>
                
                <div style={{
                    position: "absolute",
                    bottom:'100px',
                    fontSize: '30px',
                    left: '30%',
                  }}>
                  <div style={{textAlign: 'center'}}><Link to="/personal-website/about" style={linkStyle}>About</Link></div>
                  <div style={{textAlign: 'center'}}><Link to="/personal-website/resume" style={linkStyle}>Resume</Link></div>
                  <div style={{textAlign: 'center'}}><Link to="/personal-website/crafts" style={linkStyle}>Crafts</Link></div>
                  <div style={{textAlign: 'center'}}><Link to="/personal-website/places" style={linkStyle}>Places</Link></div>
                </div>
              </div>
              <SocialMediaBar></SocialMediaBar>
            </menu>
            <div style={pageStyle}>
              <Route exact path="/personal-website" component={Home} />
              <Route exact path="/personal-website/about" component={About} />
              <Route path="/personal-website/resume" component={Resume} />
              <Route path="/personal-website/crafts" component={Crafts} />

            </div>
            </SplitPane>
          </Router>
        );
      }
}

export default Navigation
