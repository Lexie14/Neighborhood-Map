import React, { Component } from 'react';

class List extends Component {
 
  updateQuery =(query) => {
    this.props.filterLocations(query)
  } 

  render() {
    const { locations } = this.props;

    return (
      <aside className="list">
       <h2 className="title">Popular Places</h2>
       <div className="filter">
       <input
       value={this.props.query}
       onChange={(event) => this.updateQuery(event.target.value)} 
       className="filterInput" placeholder="Filter locations"/>
       <button className="filterBtn">Filter</button>
       </div>
        <ul>
        {this.props.filteredLocations.map((location) =>
          <li key={location.key}>{location.title}</li>
          )}
        </ul>
      </aside>
    );
  }
}

export default List;