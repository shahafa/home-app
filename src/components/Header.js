import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AuthService from '../utils/AuthService';
import LogoImg from '../static/homeTitle.svg';

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
        iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>}
        onChange={this.handleRightMenuChange}
        anchorOrigin={styles.menuOrigin}
        targetOrigin={styles.menuOrigin}
      >
        <MenuItem value="logout" primaryText="התנתק" />
      </IconMenu>
    );
  }

  render() {
    return (
      <AppBar
        style={styles.appBar}
        iconElementLeft={this.rightMenu()}
        title={
          <div style={{ paddingTop: '4px' }}>
            <img src={LogoImg} alt="" style={{ height: '24px' }} />
          </div>}
        titleStyle={{ display: 'flex', flexDirection: 'row-reverse' }}
      />
    );
  }
}

export default Header;
