import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/content/add';
import DropDown from '../components/DropDown';
import { addFilter } from '../actions/filterActions';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginRight: '-19px',
    marginTop: '10px',
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginRight: '-19px',
  },

  dropDownItem: {
    marginLeft: '15px',
  },

  menuItem: {
    fontSize: '13px',
  },

  checkboxLabelStyle: {
    marginRight: '3px',
    color: '#757575',
  },

  checkbox: {
    float: 'right',
  },
};

class Filter extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    fromRooms: null,
    toRooms: null,
    fromFloor: null,
    toFloor: null,
    fromPrice: null,
    toPrice: null,
    renovated: null,
    elevator: null,
    parking: null,
  };

  handleFromRoomsTouchTap = (event, index, value) => {
    this.setState({
      fromRooms: value,
    });
  }

  handleToRoomsTouchTap = (event, index, value) => {
    this.setState({
      toRooms: value,
    });
  }

  handleFromFloorTouchTap = (event, index, value) => {
    this.setState({
      fromFloor: value,
    });
  }

  handleToFloorTouchTap = (event, index, value) => {
    this.setState({
      toFloor: value,
    });
  }

  handleFromPriceTouchTap = (event, index, value) => {
    this.setState({
      fromPrice: value,
    });
  }

  handleToPriceTouchTap = (event, index, value) => {
    this.setState({
      toPrice: value,
    });
  }

  handleRenovatedTouchTap = (event, isInputChecked) => {
    this.setState({
      renovated: isInputChecked ? true : null,
    });
  }

  handleElevatorTouchTap = (event, isInputChecked) => {
    this.setState({
      elevator: isInputChecked ? true : null,
    });
  }

  handleParkingTouchTap = (event, isInputChecked) => {
    this.setState({
      parking: isInputChecked ? true : null,
    });
  }

  handleAddButonClick = () => {
    const { dispatch } = this.props;
    dispatch(addFilter(this.state));
  }

  render() {
    return (
      <div>
        <div style={styles.container}>
          <div style={styles.dropDownItem}>
            <DropDown defaultDisplayValue="מחדרים" onChange={this.handleFromRoomsTouchTap}>
              <MenuItem value={1} primaryText="מחדר אחד" style={styles.menuItem} />
              <MenuItem value={2} primaryText="מ-2 חדרים" style={styles.menuItem} />
              <MenuItem value={3} primaryText="מ-3 חדרים" style={styles.menuItem} />
              <MenuItem value={4} primaryText="מ-4 חדרים" style={styles.menuItem} />
            </DropDown>
          </div>

          <div style={styles.dropDownItem}>
            <DropDown style={styles.dropDownItem} defaultDisplayValue="עד חדרים" onChange={this.handleToRoomsTouchTap}>
              <MenuItem value={1} primaryText="עד חדר אחד" style={styles.menuItem} />
              <MenuItem value={2} primaryText="עד 2 חדרים" style={styles.menuItem} />
              <MenuItem value={3} primaryText="עד 3 חדרים" style={styles.menuItem} />
              <MenuItem value={4} primaryText="עד 4 חדרים" style={styles.menuItem} />
            </DropDown>
          </div>

          <div style={styles.dropDownItem}>
            <DropDown style={styles.dropDownItem} defaultDisplayValue="מקומה" onChange={this.handleFromFloorTouchTap}>
              <MenuItem value={1} primaryText="מקומה ראשונה" style={styles.menuItem} />
              <MenuItem value={2} primaryText="מקומה שנייה" style={styles.menuItem} />
              <MenuItem value={3} primaryText="מקומה שלישית" style={styles.menuItem} />
              <MenuItem value={4} primaryText="מקומה רביעית" style={styles.menuItem} />
            </DropDown>
          </div>

          <div style={styles.dropDownItem}>
            <DropDown style={styles.dropDownItem} defaultDisplayValue="עד קומה" onChange={this.handleToFloorTouchTap}>
              <MenuItem value={1} primaryText="עד קומה ראשונה" style={styles.menuItem} />
              <MenuItem value={2} primaryText="עד קומה שנייה" style={styles.menuItem} />
              <MenuItem value={3} primaryText="עד קומה שלישית" style={styles.menuItem} />
              <MenuItem value={4} primaryText="עד קומה רביעית" style={styles.menuItem} />
            </DropDown>
          </div>

          <div style={styles.dropDownItem}>
            <DropDown style={styles.dropDownItem} defaultDisplayValue="ממחיר" onChange={this.handleFromPriceTouchTap}>
              <MenuItem value={3000} primaryText="3000 ש״ח" style={styles.menuItem} />
              <MenuItem value={3500} primaryText="3500 ש״ח" style={styles.menuItem} />
              <MenuItem value={4000} primaryText="4000 ש״ח" style={styles.menuItem} />
              <MenuItem value={4500} primaryText="4500 ש״ח" style={styles.menuItem} />
              <MenuItem value={5000} primaryText="5000 ש״ח" style={styles.menuItem} />
              <MenuItem value={5500} primaryText="5500 ש״ח" style={styles.menuItem} />
              <MenuItem value={6000} primaryText="6000 ש״ח" style={styles.menuItem} />
              <MenuItem value={6500} primaryText="6500 ש״ח" style={styles.menuItem} />
              <MenuItem value={7000} primaryText="7000 ש״ח" style={styles.menuItem} />
            </DropDown>
          </div>

          <div style={styles.dropDownItem}>
            <DropDown style={styles.dropDownItem} defaultDisplayValue="עד מחיר" onChange={this.handleToPriceTouchTap}>
              <MenuItem value={3000} primaryText="3000 ש״ח" style={styles.menuItem} />
              <MenuItem value={3500} primaryText="3500 ש״ח" style={styles.menuItem} />
              <MenuItem value={4000} primaryText="4000 ש״ח" style={styles.menuItem} />
              <MenuItem value={4500} primaryText="4500 ש״ח" style={styles.menuItem} />
              <MenuItem value={5000} primaryText="5000 ש״ח" style={styles.menuItem} />
              <MenuItem value={5500} primaryText="5500 ש״ח" style={styles.menuItem} />
              <MenuItem value={6000} primaryText="6000 ש״ח" style={styles.menuItem} />
              <MenuItem value={6500} primaryText="6500 ש״ח" style={styles.menuItem} />
              <MenuItem value={7000} primaryText="7000 ש״ח" style={styles.menuItem} />
            </DropDown>
          </div>
        </div>

        <div style={styles.checkboxContainer}>
          <div style={styles.checkbox}>
            <Checkbox
              onCheck={this.handleRenovatedTouchTap}
              label="משופצת"
              labelPosition="left"
              labelStyle={styles.checkboxLabelStyle}
            />
          </div>

          <div>
            <Checkbox
              onCheck={this.handleElevatorTouchTap}
              label="מעלית"
              labelPosition="left"
              labelStyle={styles.checkboxLabelStyle}
            />
          </div>

          <div>
            <Checkbox
              onCheck={this.handleParkingTouchTap}
              label="חניה"
              labelPosition="left"
              labelStyle={styles.checkboxLabelStyle}
            />
          </div>
        </div>

        <div style={styles.buttonsContainer}>
          <IconButton onTouchTap={this.handleAddButonClick}>
            <ActionHome color="#757575" />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default connect()(Filter);
