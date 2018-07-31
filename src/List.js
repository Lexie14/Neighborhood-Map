import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.updateQuery = this.updateQuery.bind(this);
  }
 
  updateQuery =(query) => {
    this.props.filterLocations(query);
  } 

  render() {
    const listVisible=this.props.listVisible
    
    return (
      <div className="list">
      {listVisible && (
      <aside className="list">
       <h2 className="title">Popular Places</h2>
       <div className="filter">
       <input
       value={this.props.query}
       onChange={(event) => this.updateQuery(event.target.value)} 
       className="filterInput" placeholder="Filter locations"/>
       </div>
        <ul>
        {this.props.filteredLocations.map((location) =>
          <li key={location.key}
          onClick={()=>(this.props.onListViewItemClick(location))}
          >{location.name}</li>
          )}
        </ul>
      </aside>
      )}
      </div>


    );
  }
}

export default List;