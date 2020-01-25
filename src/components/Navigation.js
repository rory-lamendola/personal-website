import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './pages/About'
import Home from './pages/Home'
import Resume from './pages/Resume'

class Navigation extends React.Component{
    render() {
        return (
        <Router>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                    <li><Link to={'/resume'} className="nav-link">Resume</Link></li>
                </ul>
              </nav>
              <hr />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/resume' component={Resume} />
              </Switch>
            </div>
          </Router>
        );
      }
}

export default Navigation