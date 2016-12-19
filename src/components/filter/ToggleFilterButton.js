import React, { PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  toggleFilterLabelStyle: {
    color: '#757575',
    marginLeft: '10px',
  },
};

const ToggleFilterButton = ({ onToggle }) => (
  <div style={styles.container}>
    <Toggle
      style={{ width: '73px' }}
      label="סינון"
      labelPosition="right"
      labelStyle={styles.toggleFilterLabelStyle}
      defaultToggled
      onToggle={onToggle}
    />
  </div>
);

ToggleFilterButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default ToggleFilterButton;
