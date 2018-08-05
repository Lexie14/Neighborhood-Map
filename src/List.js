import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery = query => {
    this.props.filterLocations(query);
  };

  render() {
    return (
      <div>
        <section className="filter">
          <label htmlFor="input" className="listHeader">
            Filter locations
          </label>
          <input
            type="text"
            id="input"
            className="filterInput"
            value={this.props.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </section>

        <ul>
          {this.props.filteredLocations.map(location => (
            <li
              key={location.key}
              aria-label={location.name}
              tabIndex="0"
              role="button"
              onClick={() => this.props.onListItemClick(location)}
            >
              {location.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;