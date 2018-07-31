import React, { Component } from 'react';
import GoogleMap from './GoogleMap.js';
import List from './List.js';

import './App.css';
import escapeRegExp from 'escape-string-regexp';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterLocations = this.filterLocations.bind(this);
  this.state = {
    locations: [
        {id: '4b4c4769f964a52068b026e3',
        key: 'zlote-terasy', 
        name: '',
        type: '',
        address: '',
        postalCode: '',
        city: '', 
        location: {lat: 52.2299756, lng: 21.0025774}},
        
        {id: '4b6c5160f964a52039302ce3',
        key: 'aushan', 
        name: '',
        type: '',
        address: '',
        postalCode: '',
        city: '', 
        location: {lat: 52.242121, lng: 20.930710}},
        
        {id: '4c713f17df6b8cfa556fba4d',
        key: 'park-moczydlo', 
        name: '',
        type: '',
        address: '',
        postalCode: '',
        city: '', 
        location: {lat: 52.2409607, lng: 20.9532269}},
        
        {id: '5107b917e4b09f028210823c',
        key: 'hala-koszyki', 
        name: '',
        type: '',
        address: '',
        postalCode: '',
        city: '', 
        location: {lat: 52.222437, lng: 21.010999}},
        
        {id: '4b1a33dcf964a5201be823e3',
        key: 'cinema-city', 
        name: '',
        type: '',
        address: '',
        postalCode: '',
        city: '', 
        location: {lat: 52.256637, lng: 20.984122}}
        ],
        query: '',
        filteredLocations: [],
        showingInfoWindow: false,
    selectedPlace: {},
    infoPosition: {},
    listVisible: true
  };
}

componentDidMount() {
  const newData = this.state.locations
  newData.map((location) => {
   return(
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${location.location.lat},${location.location.lng}&client_id=CNHL0RH0I5DUM5B42LTDNVTCE3IPJCOK5G3ZY5C3H2UYEW5D&client_secret=01FTFRQ0BKGCCSJ4ROA3CVHNCS2EHD1XH4J00NPRGKECXHPQ&v=20180723&m=foursquare`)
    .then(response => response.json())
    .then((data) => {
    location.name = data.response.venues[0].name
    location.type = data.response.venues[0].categories[0].name
    location.address = data.response.venues[0].location.address
    location.postalCode = data.response.venues[0].location.postalCode
    location.city = data.response.venues[0].location.city
    this.setState({newData})
  })
  )
})
}

onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      infoPosition: props.position,
      showingInfoWindow: true
    });
  }
    
onMapClick = ()=> {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        infoPosition: {}
      });
    }
  }

    onListViewItemClick =(location) =>{
    this.setState({
      infoPosition: location.location,
      showingInfoWindow: true,
      selectedPlace: location
    })
    }

  filterLocations = (query, newData) => {
  this.setState({
    query: query,
    infoPosition: {},
    showingInfoWindow: false,
  });
  }

  toggleList = () => {
    if (this.state.listVisible) {
      this.setState({ listVisible: false });
    } else {
      this.setState({ listVisible: true });
    }
  };

  render() {
    let filteredLocations
    const {query, locations} = this.state;
      if (query) {
      const match = new RegExp(escapeRegExp(query),'i');
     filteredLocations = locations.filter((location)=> match.test(location.name))
  } else {
    filteredLocations = locations
    }

   return (
      <div className="app">
      

       <List 
        locations={this.state.locations}
        filteredLocations={filteredLocations}
        query={this.state.query}
        filterLocations={this.filterLocations}
        onListViewItemClick={this.onListViewItemClick}
        listVisible={this.state.listVisible}
        />
       <GoogleMap
       toggleList={this.toggleList}
       locations={filteredLocations}
       showingInfoWindow={this.state.showingInfoWindow}
       infoPosition={this.state.infoPosition}
       selectedPlace={this.state.selectedPlace}
       onMarkerClick={this.onMarkerClick}
       info={this.state.info}
       onMapClick={this.onMapClick}
       />

      </div>
    );
  }
}

export default App;