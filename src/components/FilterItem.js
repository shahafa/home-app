/* eslint-disable no-underscore-dangle */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { deleteFilter } from '../actions/filterActions';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    lineHeight: '24px',
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

class FilterItem extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    filter: PropTypes.object.isRequired,
  }

  filterString() {
    const {
      fromRooms,
      toRooms,
      fromFloor,
      toFloor,
      fromPrice,
      toPrice,
      renovated,
      elevator,
      parking,
    } = this.props.filter;

    let string = '';
    if (fromRooms) {
      if (fromRooms === 1) {
        string = 'מחדר אחד';
      } else {
        string = `מ- ${fromRooms} חדרים`;
      }
    }

    if (toRooms) {
      if (string !== '') { string += ', '; }
      if (toRooms === 1) {
        string += 'עד חדר אחד';
      } else {
        string += `עד- ${toRooms} חדרים`;
      }
    }

    if (fromFloor) {
      if (string !== '') { string += ', '; }
      string += `מקומה- ${fromFloor}`;
    }

    if (toFloor) {
      if (string !== '') { string += ', '; }
      string += `עד קומה- ${toFloor}`;
    }

    if (fromPrice) {
      if (string !== '') { string += ', '; }
      string += `מ- ${fromPrice} ש״ח`;
    }

    if (toPrice) {
      if (string !== '') { string += ', '; }
      string += `עד- ${toPrice} ש״ח`;
    }

    if (renovated) {
      if (string !== '') { string += ', '; }
      string += 'משופצת';
    }

    if (elevator) {
      if (string !== '') { string += ', '; }
      string += 'מעלית';
    }

    if (parking) {
      if (string !== '') { string += ', '; }
      string += 'חניה';
    }

    return string;
  }

  handleDeleteButonClick = () => {
    const { dispatch } = this.props;

    const filterId = this.props.filter._id;
    dispatch(deleteFilter(filterId));
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.filter}>{this.filterString()}</div>

        <DeleteIcon style={styles.deleteButton} color="#757575" onTouchTap={this.handleDeleteButonClick} />
      </div>
    );
  }
}

export default connect()(FilterItem);
