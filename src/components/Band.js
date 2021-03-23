import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
  	this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        Band Component
      </div>
    );
  }
};

export default Band;
