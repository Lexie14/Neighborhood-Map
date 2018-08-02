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
    
    
    return (
      <div>
       <section className="filter">
        <input
        className="filterInput"
        placeholder="Filter locations"
        type="text"
        role="text-box"
        value={this.props.query}
        onChange={(event) => this.updateQuery(event.target.value)} 
        />
        </section>
        
        <ul>
         {this.props.filteredLocations.map((location) =>
         <li 
         key={location.key}
         aria-label={location.name}
         onClick={()=>(this.props.onListViewItemClick(location))}
         >
         {location.name}
         </li>
         )}
        </ul>

      </div>
    )

  }
}

export default List;