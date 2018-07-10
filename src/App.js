import React, { Component } from 'react';
import GoogleMap from './GoogleMap.js';
import List from './List.js';
import './App.css';
import escapeRegExp from 'escape-string-regexp';

class App extends Component {
  state = {
    locations: [
        {key: 'zlote-terasy', title: 'Zlote Terasy', location: {lat: 52.2299756, lng: 21.0025774}},
        {key: 'wola-park', title: 'Wola Park', location: {lat: 52.242051, lng: 20.9311577}},
        {key: 'park-moczydlo', title: 'Park Moczydlo', location: {lat: 52.2409607, lng: 20.9532269}},
        {key: 'warsaw-uprising-museum', title: 'Warsaw Uprising Museum', location: {lat: 52.232324, lng: 20.981154}},
        {key: 'arkadia', title: 'Arkadia', location: {lat: 52.2574323, lng: 20.9848839}}
        ],
        query: '',
        filteredLocations: []
  }

filterLocations = (query) => {
  this.setState({query: query})
  }

  render() {
     let filteredLocations
        if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query),'i')
     filteredLocations = this.state.locations.filter((location)=> match.test(location.title))
  } else {
    filteredLocations = this.state.locations
    }

    return (
      <div className="app">
       <List 
        locations={this.state.locations}
        filteredLocations={filteredLocations}
        query={this.state.query}
        filterLocations={this.filterLocations}
        />
       <GoogleMap locations={filteredLocations} />
      </div>
    );
  }
}

export default App;