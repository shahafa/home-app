import React, { Component } from 'react';

class NoAdsFound extends Component {
  render() {
    const titleStyle = {
        color: '#757575',
        fontSize: '16px',
        fontWeight: 'lighter'
    }

    return (
      <center>
        <div style={titleStyle}>לא נמצאו מודעות</div>
      </center>
    );
  }
}

export default NoAdsFound;
