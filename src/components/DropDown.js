import React, { PropTypes } from 'react';
import DropDownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    lineHeight: '24px',
    cursor: 'pointer',
  },

  label: {
    color: '#757575',
    direction: 'rtl',
    whiteSpace: 'nowrap',
  },

  allItem: {
    fontSize: '13px',
  },

  menu: {
    direction: 'rtl',
  },

  selectedMenuItemStyle: {
    color: '#4688F1',
  },
};

const anchorOrigin = {
  horizontal: 'right',
  vertical: 'bottom',
};

const targetOrigin = {
  horizontal: 'right',
  vertical: 'top',
};

class DropDown extends React.Component {
  static propTypes = {
    defaultDisplayValue: PropTypes.string,
    children: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.any,
  }

  state = {
    open: false,
    displayValue: null,
  };

  handleTouchTapControl = (event) => {
    event.preventDefault();

    this.setState({
      anchorEl: this.root,
      open: !this.state.open,
    });
  };

  handleRequestCloseMenu = () => {
    this.setState({
      open: false,
      anchorEl: null,
    });
  };

  handleItemTouchTap = (event, child, index) => {
    event.persist();

    this.setState({
      open: false,
      value: child.props.value,
      displayValue: child.props.primaryText,
    });

    if (this.props.onChange) {
      this.props.onChange(event, index, child.props.value);
    }
  };

  render() {
    const {
      children,
      defaultDisplayValue,
      value,
    } = this.props;

    const {
      anchorEl,
      open,
      displayValue,
    } = this.state;

    const label = value ? displayValue : defaultDisplayValue;

    return (
      <div
        style={styles.container}
        onTouchTap={this.handleTouchTapControl}
        ref={(component) => { this.root = component; }}
      >
        <div style={styles.label}>
          {label}
        </div>
        <DropDownArrow color="#757575" />
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          open={open}
          animation={PopoverAnimationVertical}
          onRequestClose={this.handleRequestCloseMenu}
        >
          <Menu
            maxHeight={500}
            desktop
            value={value}
            onItemTouchTap={this.handleItemTouchTap}
            style={styles.menu}
            selectedMenuItemStyle={styles.selectedMenuItemStyle}
          >
            <MenuItem value={null} primaryText="הכל" style={styles.allItem} />
            {children}
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default DropDown;
