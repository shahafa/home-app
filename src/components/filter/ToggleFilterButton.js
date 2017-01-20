import React, { PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';
import IconButton from 'material-ui/IconButton';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },

  toggleFilterLabelStyle: {
    color: '#757575',
    marginLeft: '10px',
  },

  filterVisibleButton: {
    marginLeft: '10px',
    padding: '0',
    height: '24px',
    width: '24px',
  },
};

const ToggleFilterButton = ({
  onToggle,
  filterVisible,
  onFilterVisibleButtonClick,
}) => (
  <div style={styles.container}>
    <Toggle
      style={{ width: '73px' }}
      label="סינון"
      labelPosition="right"
      labelStyle={styles.toggleFilterLabelStyle}
      defaultToggled
      onToggle={onToggle}
    />

    <IconButton style={styles.filterVisibleButton}>
      {filterVisible ?
        <ArrowUp color="#757575" onTouchTap={onFilterVisibleButtonClick} /> :
        <ArrowDown color="#757575" onTouchTap={onFilterVisibleButtonClick} />
      }
    </IconButton>
  </div>
);

ToggleFilterButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  filterVisible: PropTypes.bool.isRequired,
  onFilterVisibleButtonClick: PropTypes.func.isRequired,
};

export default ToggleFilterButton;
