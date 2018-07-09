import React, { Component } from 'react';
import {Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';

class Map extends Component {

  render() {

const styles = {
      width: '100%',
      height: '100%'
    };

    return (
      <Map
        google={this.props.google}
        zoom={13.5}
        style={styles}
        initialCenter={{
          lat: 60.16952,
          lng: 24.93545
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvmFArLCAwk_50AZuXKl_EmUd9t2_WH5c')
})(Map)