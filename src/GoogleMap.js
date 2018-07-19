import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import './App.css';

var foursquare = require('react-foursquare')({
  clientID: 'CNHL0RH0I5DUM5B42LTDNVTCE3IPJCOK5G3ZY5C3H2UYEW5D',
  clientSecret: '01FTFRQ0BKGCCSJ4ROA3CVHNCS2EHD1XH4J00NPRGKECXHPQ'  
});

var params = {
  "ll": "37.7749,-122.4194",
  "query": 'Blue Bottle'
};

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    // this.openInfo = this.openInfo.bind(this);
    this.state = {
    activeMarker: {},
    // selectedPlace: {},
    isOpen: false,
    info: []
  }
}

    componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ info: res.response.venues });
      });
  }
// openInfo = () => {
//   this.props.openInfoWindow();
// }

  openInfo = (props, marker, e) => {
    this.setState({
      // selectedPlace: props,
      activeMarker: marker,
      isOpen: true
    })
  }

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
        onClick={this.openInfo}
        />
        )}
    

          <InfoWindow 
          marker={this.state.activeMarker} 
          visible={this.state.isOpen}>
          <div>
        <div>Items:</div>
        { this.state.info.map(item=> { return <div key={item.id}>{item.name}</div>}) }
    </div>
                         </InfoWindow>
      </Map>

      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvmFArLCAwk_50AZuXKl_EmUd9t2_WH5c')
})(GoogleMap)