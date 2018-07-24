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
        title: 'Zlote Terasy', 
        location: {lat: 52.2299756, lng: 21.0025774}},
        
        {id: '4b6c5160f964a52039302ce3',
        key: 'aushan', 
        title: 'Aushan', 
        location: {lat: 52.242121, lng: 20.930710}},
        
        {id: '4c713f17df6b8cfa556fba4d',
        key: 'park-moczydlo', 
        title: 'Park Moczydlo', 
        location: {lat: 52.2409607, lng: 20.9532269}},
        
        {id: '4d49440ca67eba7aff1170d6',
        key: 'warsaw-uprising-museum', 
        title: 'Warsaw Uprising Museum', 
        location: {lat: 52.232324, lng: 20.981154}},
        
        {id: '4b1a33dcf964a5201be823e3',
        key: 'cinema-city', 
        title: 'Cinema City', 
        location: {lat: 52.256637, lng: 20.984122}}
        ],
        query: '',
        filteredLocations: [],
  }
}

filterLocations = (query) => {
  this.setState({query: query});
  }

  render() {
    const {query, locations} = this.state;
     let filteredLocations
        if (query) {
      const match = new RegExp(escapeRegExp(query),'i');
     filteredLocations = locations.filter((location)=> match.test(location.title))
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
        />
       <GoogleMap
       locations={filteredLocations}
       />
      </div>
    );
  }
}

export default App;