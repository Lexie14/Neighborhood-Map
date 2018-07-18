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
        {key: 'zlote-terasy', title: 'Zlote Terasy', location: {lat: 52.2299756, lng: 21.0025774}},
        {key: 'wola-park', title: 'Wola Park', location: {lat: 52.242051, lng: 20.9311577}},
        {key: 'park-moczydlo', title: 'Park Moczydlo', location: {lat: 52.2409607, lng: 20.9532269}},
        {key: 'warsaw-uprising-museum', title: 'Warsaw Uprising Museum', location: {lat: 52.232324, lng: 20.981154}},
        {key: 'arkadia', title: 'Arkadia', location: {lat: 52.2574323, lng: 20.9848839}}
        ],
        query: '',
        filteredLocations: [],
        selectedLocation: null,
        info: ''
  }
}

filterLocations = (query) => {
  this.setState({query: query});
  }


openInfoWindow = () => {
  const greet = 'hello';
  console.log("bla");
  return <div><p>{greet}</p></div>;
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
       openInfoWindow={this.openInfoWindow} 
       info={this.state.info}
       />
      </div>
    );
  }
}

export default App;