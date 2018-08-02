import React, { Component } from 'react';

class Error extends Component {

  render() {

    return (
    <div className="apiError">
    <img className="fail" src={require(`./error.png`)} alt="apiError"/>
    <p className="errorMsg">The app is failed to fetch data form the 3rd party API</p>
    <p className="errorMsg">In case you are a developer, please check the Javascript console for a possible solution</p>
    </div>
    
    )
  }
}

export default Error;