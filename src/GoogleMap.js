import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import './App.css';



class GoogleMap extends Component {

  render() {

    return (
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
        type={location.type}
        address={location.address}
        postalCode={location.postalCode}
        city={location.city}
        animation={0}
        />
        )}

         <InfoWindow
          position={{lat: parseFloat(this.props.infoPosition.lat), lng: parseFloat(this.props.infoPosition.lng)}}
          visible={this.props.showingInfoWindow}
          onClose={this.props.infoClose}          
          >
          <div>
            <div className="info-window" role="Dialog">
          <p tabIndex="0"><span>Name:</span> {this.props.selectedPlace.name}</p>
          <p tabIndex="0"><span>Type:</span> {!this.props.selectedPlace.type ? 'N/A' : this.props.selectedPlace.type}</p>
          <p tabIndex="0"><span>Address:</span> {!this.props.selectedPlace.address ? 'N/A' : this.props.selectedPlace.address}</p>
          <p tabIndex="0"><span>Postal code:</span> {!this.props.selectedPlace.postalCode ? 'N/A' : this.props.selectedPlace.postalCode}</p>
          <p tabIndex="0"><span>City:</span> {!this.props.selectedPlace.city ? 'N/A' : this.props.selectedPlace.city}</p>
          </div>
          <div className="source">
          <p>Data provided by the Foursquare API</p>
          </div>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvmFArLCAwk_50AZuXKl_EmUd9t2_WH5c')
})(GoogleMap)