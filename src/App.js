import React, { Component } from 'react';
import GoogleMap from './GoogleMap.js';
import './App.css';

class App extends Component {
  state = {
    locations: [
        {title: 'Zlote Terasy', location: {lat: 52.2299756, lng: 21.0025774}},
        {title: 'Wola Park', location: {lat: 52.242051, lng: 20.9311577}},
        {title: 'Park Moczydlo', location: {lat: 52.2409607, lng: 20.9532269}},
        {title: 'Warsaw Uprising Museum', location: {lat: 52.232324, lng: 20.981154}},
        {title: 'Arkadia', location: {lat: 52.2574323, lng: 20.9848839}}
        ]
  }

  render() {

    return (
      <div className="App">
        <GoogleMap locations={this.state.locations} />
      </div>
    );
  }
}

export default App;