import React, {Component} from 'react';
import AuthService from '../utils/AuthService';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Header extends Component {
  handleRightMenuChange = (event, value) => {
    switch (value) {
      case 'logout':
        AuthService.logout();
        return;
      default:
        return;
    }
  };

  rightMenu() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        onChange={this.handleRightMenuChange}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem value="logout" primaryText="Logout" />
      </IconMenu>
    )
  }

  render() {
    const appBarStyle = {
      backgroundColor: '#4688F1'
    }

    return (
      <AppBar
        style={appBarStyle}
        showMenuIconButton={false}
        title={<span style={{fontWeight: '300', fontSize: '24px'}}>Home</span>}
        iconElementRight={this.rightMenu()}
      />
    );
  }
}

export default Header;
