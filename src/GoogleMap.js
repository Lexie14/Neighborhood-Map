import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import './App.css';
import Button from './Button.js';


class GoogleMap extends Component {

  render() {

    return (
      <div className="main">
      <Button toggleList={this.props.toggleList} />
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: 52.2413928,
          lng: 20.9876703
        }}
        onClick={this.props.onMapClick}
        className="map"
        >
        {this.props.locations.map(location =>
        <Marker onClick={this.props.onMarkerClick}
        key={location.key}
        id={location.id}
        title={location.key}
        position={location.location}
        name={location.name}
        type = {location.type}
        address = {location.address}
        postalCode = {location.postalCode}
        city = {location.city}/>
        )}

         <InfoWindow
          position={{lat: parseFloat(this.props.infoPosition.lat), lng: parseFloat(this.props.infoPosition.lng)}}
          visible={this.props.showingInfoWindow}>
            <div>
          <p>Name: {this.props.selectedPlace.name}</p>
          <p>Type: {!this.props.selectedPlace.type ? 'N/A' : this.props.selectedPlace.type}</p>
          <p>Address: {!this.props.selectedPlace.address ? 'N/A' : this.props.selectedPlace.address}</p>
          <p>Postal code: {!this.props.selectedPlace.postalCode ? 'N/A' : this.props.selectedPlace.postalCode}</p>
          <p>City: {!this.props.selectedPlace.city ? 'N/A' : this.props.selectedPlace.city}</p>
          <p>Data provided by the Foursquare API</p>
            </div>
        </InfoWindow>
      </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvmFArLCAwk_50AZuXKl_EmUd9t2_WH5c')
})(GoogleMap)