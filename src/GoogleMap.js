import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import './App.css';


class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
}

onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    }); 

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
        <Marker onClick={this.onMarkerClick}
        key={location.key}
        title={location.title}
        position={location.location}/>
                )}    

         <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.title}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvmFArLCAwk_50AZuXKl_EmUd9t2_WH5c')
})(GoogleMap)