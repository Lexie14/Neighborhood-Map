import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './App.css';

class GoogleMap extends Component {

  render() {

    return (
      <Map
        google={this.props.google}
        zoom={13.5}
        initialCenter={{
          lat: 52.2413928,
          lng: 20.9876703
        }}
        className={'map'}
        >

        {this.props.locations.map(location => 
        <Marker 
        key={location.key}
        title={location.title}
        position={location.location} 
        />
        )}
      </Map>

      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvmFArLCAwk_50AZuXKl_EmUd9t2_WH5c')
})(GoogleMap)