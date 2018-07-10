import React, { Component } from 'react';

class List extends Component {
  
  render() {
    const { locations } = this.props;

    return (
      <aside className="list">
       <h2 className="title">Popular Places</h2>
       <div className="filter">
       <input className="filterInput" placeholder="Filter locations"/>
       <button className="filterBtn">Filter</button>
       </div>
        <ul>
        {locations.map(location =>
          <li key={location.key}>{location.title}</li>
          )}
        </ul>
      </aside>
    );
  }
}

export default List;