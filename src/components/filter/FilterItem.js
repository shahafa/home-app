/* eslint-disable no-underscore-dangle */

import React, { PropTypes } from 'react';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

function filterString(filter) {
  let string = '';
  if (filter.neighborhood) {
    string = `${filter.neighborhood}`;
  }

  if (filter.fromRooms) {
    if (string !== '') { string += ', '; }
    if (filter.fromRooms === 1) {
      string += 'מחדר אחד';
    } else {
      string += `מ- ${filter.fromRooms} חדרים`;
    }
  }

  if (filter.toRooms) {
    if (string !== '') { string += ', '; }
    if (filter.toRooms === 1) {
      string += 'עד חדר אחד';
    } else {
      string += `עד- ${filter.toRooms} חדרים`;
    }
  }

  if (filter.fromFloor) {
    if (string !== '') { string += ', '; }
    string += `מקומה- ${filter.fromFloor}`;
  }

  if (filter.toFloor) {
    if (string !== '') { string += ', '; }
    string += `עד קומה- ${filter.toFloor}`;
  }

  if (filter.fromPrice) {
    if (string !== '') { string += ', '; }
    string += `מ- ${filter.fromPrice} ש״ח`;
  }

  if (filter.toPrice) {
    if (string !== '') { string += ', '; }
    string += `עד- ${filter.toPrice} ש״ח`;
  }

  if (filter.renovated) {
    if (string !== '') { string += ', '; }
    string += 'משופצת';
  }

  if (filter.elevator) {
    if (string !== '') { string += ', '; }
    string += 'מעלית';
  }

  if (filter.parking) {
    if (string !== '') { string += ', '; }
    string += 'חניה';
  }

  return string;
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    lineHeight: '24px',
    marginBottom: '10px',
  },

  filter: {
    color: '#757575',
  },

  deleteButton: {
    lineHeight: '24px',
    cursor: 'pointer',
    height: '18px',
    width: '18px',
    marginRight: '7px',
  },
};

const FilterItem = ({
  filter,
  onDeleteFilterButtonClick,
}) => (
  <div style={styles.container}>
    <div style={styles.filter}>{filterString(filter)}</div>

    <DeleteIcon style={styles.deleteButton} color="#757575" onTouchTap={() => { onDeleteFilterButtonClick(filter._id); }} />
  </div>
);

FilterItem.propTypes = {
  filter: PropTypes.object.isRequired,
  onDeleteFilterButtonClick: PropTypes.func.isRequired,
};

export default FilterItem;
