import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AuthService from '../utils/AuthService';

const styles = {
  appBar: {
    backgroundColor: '#4688F1',
  },

  title: {
    fontWeight: '300',
    fontSize: '24px',
  },

  menuOrigin: {
    horizontal: 'right',
    vertical: 'top',
  },
};

class Header extends Component {
  handleRightMenuChange = (event, value) => {
    switch (value) {
      case 'logout':
        AuthService.logout();
        break;
      default:
        break;
    }
  };

  rightMenu() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        onChange={this.handleRightMenuChange}
        anchorOrigin={styles.menuOrigin}
        targetOrigin={styles.menuOrigin}
      >
        <MenuItem value="logout" primaryText="Logout" />
      </IconMenu>
    );
  }

  render() {
    return (
      <AppBar
        style={styles.appBar}
        showMenuIconButton={false}
        title={<span style={styles.title}>Home</span>}
        iconElementRight={this.rightMenu()}
      />
    );
  }
}

export default Header;
