import React, { Component } from 'react';

class List extends Component {
  
  render() {
    const { locations } = this.props;

    return (
      <aside className="list">
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