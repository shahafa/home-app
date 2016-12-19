import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import DropDown from '../DropDown';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },

  dropDownItem: {
    marginLeft: '15px',
    marginTop: '8px',
  },

  menuItem: {
    fontSize: '13px',
  },

  checkboxLabelStyle: {
    marginRight: '3px',
    color: '#757575',
  },

  checkbox: {
    marginRight: '-20px',
    marginLeft: '20px',
    marginTop: '8px',
  },

  addFilterButtonContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: '10px',
  },

  addFilterButton: {
    height: '18px',
    marginTop: '15px',
  },
};

const AddFilter = ({
  fromRooms,
  toRooms,
  fromFloor,
  toFloor,
  fromPrice,
  toPrice,
  renovated,
  elevator,
  parking,
  onFromRoomsSelect,
  onToRoomsSelect,
  onFromFloorSelect,
  onToFloorSelect,
  onFromPriceSelect,
  onToPriceSelect,
  onRenovatedCheck,
  onElevatorCheck,
  onParkingCheck,
  onAddFilterButtonClick,
}) => (
  <div>
    <div style={styles.container}>
      <div style={styles.dropDownItem}>
        <DropDown
          defaultDisplayValue="מחדרים"
          onChange={onFromRoomsSelect}
          value={fromRooms}
        >
          <MenuItem value={1} primaryText="מחדר אחד" style={styles.menuItem} />
          <MenuItem value={2} primaryText="מ-2 חדרים" style={styles.menuItem} />
          <MenuItem value={3} primaryText="מ-3 חדרים" style={styles.menuItem} />
          <MenuItem value={4} primaryText="מ-4 חדרים" style={styles.menuItem} />
        </DropDown>
      </div>

      <div style={styles.dropDownItem}>
        <DropDown
          style={styles.dropDownItem}
          defaultDisplayValue="עד חדרים"
          onChange={onToRoomsSelect}
          value={toRooms}
        >
          <MenuItem value={1} primaryText="עד חדר אחד" style={styles.menuItem} />
          <MenuItem value={2} primaryText="עד 2 חדרים" style={styles.menuItem} />
          <MenuItem value={3} primaryText="עד 3 חדרים" style={styles.menuItem} />
          <MenuItem value={4} primaryText="עד 4 חדרים" style={styles.menuItem} />
        </DropDown>
      </div>

      <div style={styles.dropDownItem}>
        <DropDown
          style={styles.dropDownItem}
          defaultDisplayValue="מקומה"
          onChange={onFromFloorSelect}
          value={fromFloor}
        >
          <MenuItem value={1} primaryText="מקומה ראשונה" style={styles.menuItem} />
          <MenuItem value={2} primaryText="מקומה שנייה" style={styles.menuItem} />
          <MenuItem value={3} primaryText="מקומה שלישית" style={styles.menuItem} />
          <MenuItem value={4} primaryText="מקומה רביעית" style={styles.menuItem} />
        </DropDown>
      </div>

      <div style={styles.dropDownItem}>
        <DropDown
          style={styles.dropDownItem}
          defaultDisplayValue="עד קומה"
          onChange={onToFloorSelect}
          value={toFloor}
        >
          <MenuItem value={1} primaryText="עד קומה ראשונה" style={styles.menuItem} />
          <MenuItem value={2} primaryText="עד קומה שנייה" style={styles.menuItem} />
          <MenuItem value={3} primaryText="עד קומה שלישית" style={styles.menuItem} />
          <MenuItem value={4} primaryText="עד קומה רביעית" style={styles.menuItem} />
        </DropDown>
      </div>

      <div style={styles.dropDownItem}>
        <DropDown
          style={styles.dropDownItem}
          defaultDisplayValue="ממחיר"
          onChange={onFromPriceSelect}
          value={fromPrice}
        >
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
        <DropDown
          style={styles.dropDownItem}
          defaultDisplayValue="עד מחיר"
          onChange={onToPriceSelect}
          value={toPrice}
        >
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

      <div style={styles.checkbox}>
        <Checkbox
          onCheck={onRenovatedCheck}
          label="משופצת"
          labelPosition="left"
          labelStyle={styles.checkboxLabelStyle}
          checked={renovated}
        />
      </div>

      <div style={styles.checkbox}>
        <Checkbox
          onCheck={onElevatorCheck}
          label="מעלית"
          labelPosition="left"
          labelStyle={styles.checkboxLabelStyle}
          checked={elevator}
        />
      </div>

      <div style={styles.checkbox}>
        <Checkbox
          onCheck={onParkingCheck}
          label="חניה"
          labelPosition="left"
          labelStyle={styles.checkboxLabelStyle}
          checked={parking}
        />
      </div>
    </div>

    <div style={styles.addFilterButtonContainer}>
      <RaisedButton
        label="הוסף סינון"
        style={styles.addFilterButton}
        backgroundColor="#2297A5"
        labelColor="white"
        onTouchTap={onAddFilterButtonClick}
      />
    </div>
  </div>

);

AddFilter.propTypes = {
  fromRooms: PropTypes.number,
  toRooms: PropTypes.number,
  fromFloor: PropTypes.number,
  toFloor: PropTypes.number,
  fromPrice: PropTypes.number,
  toPrice: PropTypes.number,
  renovated: PropTypes.bool.isRequired,
  elevator: PropTypes.bool.isRequired,
  parking: PropTypes.bool.isRequired,
  onFromRoomsSelect: PropTypes.func.isRequired,
  onToRoomsSelect: PropTypes.func.isRequired,
  onFromFloorSelect: PropTypes.func.isRequired,
  onToFloorSelect: PropTypes.func.isRequired,
  onFromPriceSelect: PropTypes.func.isRequired,
  onToPriceSelect: PropTypes.func.isRequired,
  onRenovatedCheck: PropTypes.func.isRequired,
  onElevatorCheck: PropTypes.func.isRequired,
  onParkingCheck: PropTypes.func.isRequired,
  onAddFilterButtonClick: PropTypes.func.isRequired,
};

export default AddFilter;
