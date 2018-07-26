import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import './App.css';


class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: 52.2413928,
          lng: 20.9876703
        }}
        className={'map'}
        onClick={this.onMapClicked}
        >
        {this.props.locations.map(location =>
        <Marker onClick={this.props.onMarkerClick}
        key={location.key}
        title={location.title}
        position={location.location}/>
                )}    

         <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}>
            <div>
            <p>Hello</p>
          <p>Name: {this.props.info[4]}</p>
          <p>Type: {this.props.info[0]}</p>
          <p>Address: {!this.props.info[1] ? 'N/A' : this.props.info[1]}</p>
          <p>Postal code: {!this.props.info[3] ? 'N/A' : this.props.info[3]}</p>
          <p>City: {!this.props.info[2] ?'N/A' : this.props.info[2]}</p>
          <p>Data provided by the Foursquare API</p>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvmFArLCAwk_50AZuXKl_EmUd9t2_WH5c')
})(GoogleMap)