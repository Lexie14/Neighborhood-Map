import React, { Component } from 'react';
import GoogleMap from './GoogleMap.js';
import List from './List.js';
import Button from './Button.js';
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import Error from './Error.js';

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
    listVisible: true,
    error: false,
    activeMarker: {}
   };
}

componentDidMount() {
  window.gm_authFailure = () => this.setState({ error: true });
  const newData = this.state.locations
  newData.map((location) => {
   return(
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${location.location.lat},${location.location.lng}&client_id=D5SNMMUIS3DTXRQ5FN5G1UBU4XKRSEGVR0KXMS5KRB1YZGSY&client_secret=NAJXBKSQ4VEKRWJPDEGVPW1QMASLTUEGXWYDBOVJG2ODFF5J&v=20180723&m=foursquare`)
    .then(response => response.json())
    .then((data) => {
    location.name = data.response.venues[0].name
    location.type = data.response.venues[0].categories[0].name
    location.address = data.response.venues[0].location.address
    location.postalCode = data.response.venues[0].location.postalCode
    location.city = data.response.venues[0].location.city
    this.setState({newData})
  }).catch(error => {
    this.setState({error: true});
  })
  )
})
    
}

onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      infoPosition: props.position,
      showingInfoWindow: true,
      activeMarker: marker
    });
     this.state.activeMarker.setAnimation(props.google.maps.Animation.BOUNCE);
     console.log(marker);
}
    
onMapClick = (props)=> {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        infoPosition: {},
      });
      this.state.activeMarker.setAnimation(null);
    }
    console.log(this.state.activeMarker)
  }

    onListViewItemClick =(location) =>{
    this.setState({
      infoPosition: location.location,
      showingInfoWindow: true,
      selectedPlace: location
    })
    }

infoClose = () => {
  this.state.activeMarker.setAnimation(null);
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

const listVisible=this.state.listVisible;
const errorFree = !this.state.error;

   return (
      <div className="app" role="Main">
       <header className="navigation">
        <Button toggleList={this.toggleList} />
        <div className="title" tabIndex='0' role="Heading">Popular places in Warsaw</div>
       </header>

       {errorFree ? (
       <section>
       <main className="main">

        {listVisible && (
        <aside className="list" role="List">
           <List 
            locations={this.state.locations}
            filteredLocations={filteredLocations}
            query={this.state.query}
            filterLocations={this.filterLocations}
            onListViewItemClick={this.onListViewItemClick}
            listVisible={this.state.listVisible}
            />
        </aside>
        )}

        <section className="map" role="application">
          <GoogleMap
          toggleList={this.toggleList}
          locations={filteredLocations}
          showingInfoWindow={this.state.showingInfoWindow}
          infoPosition={this.state.infoPosition}
          selectedPlace={this.state.selectedPlace}
          onMarkerClick={this.onMarkerClick}
          info={this.state.info}
          onMapClick={this.onMapClick}
          animation={this.state.animation}
          google={window.google}
          clickedMarker={this.state.clickedMarker}
          activeMarker={this.state.activeMarker}
          infoClose={this.infoClose}
           />
          }
          }
          }
        </section>
       </main>

       <footer className="footer">
       <p className="sources">The app is built using data provided by the Google Api, Foursquare API and Icons8</p>
       </footer>

       </section>
       ) : (
       
       <Error />
       )}

      </div>
    );
  }
}

export default App;