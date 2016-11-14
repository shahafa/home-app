import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends Component {
  render() {
    return (
      <center>
        <CircularProgress color='#4688F1' />
      </center>
    );
  }
}

export default Loading;
