import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import './App.css';


class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.openInfo = this.openInfo.bind(this);
    this.state = {
    activeMarker: {},
    // selectedPlace: {},
    isOpen: false,
    info: []
  };
}

compomentDidMount() {
  this.openInfo();
}


  openInfo = (props, marker, e) => {
    this.setState({
      // selectedPlace: props,
      activeMarker: marker,
      isOpen: true
    })
    var lat = marker.position.lat();
      var lng = marker.position.lng();

  fetch('https://api.foursquare.com/v2/venues/search?ll=' + lat +','+ lng + '&client_id=CNHL0RH0I5DUM5B42LTDNVTCE3IPJCOK5G3ZY5C3H2UYEW5D&client_secret=01FTFRQ0BKGCCSJ4ROA3CVHNCS2EHD1XH4J00NPRGKECXHPQ&v=20180723&m=foursquare')
  .then(response => {
    return response.json();
  }).then(data => {
  this.setState({
    info: [data.response.venues[0].location.address,
    data.response.venues[0].location.city,
    data.response.venues[0].location.postalCode, 
    data.response.venues[0].name]});
  });
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
        >

        {this.props.locations.map(location => 
        
        <Marker 
        key={location.key}
        title={location.title}
        position={location.location}
        onClick={this.openInfo}
        />
        )}
    

          <InfoWindow 
          marker={this.state.activeMarker} 
          visible={this.state.isOpen}
          info={this.state.info}
          >
          <div>
          <p>Name: {this.state.info[3]}</p>
          <p>Address: {this.state.info[0]}</p>
          <p>Postal code: {this.state.info[2]}</p>
          <p>City: {this.state.info[1]}</p>
          <p>Data provided by the Foursquare API</p>
          </div>
          </InfoWindow>
      </Map>

      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvmFArLCAwk_50AZuXKl_EmUd9t2_WH5c')
})(GoogleMap)