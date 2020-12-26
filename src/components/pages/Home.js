import React, { Component, Image } from 'react';

const styles = {
  height: 'auto',
  width: '100%',
};

class Home extends Component {
  render() {
    return (
        <div>
          <img src={require('../../components/images/home.jpg')} style={styles} />
        </div>
    );
  }
}

export default Home;