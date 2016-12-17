import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import FilterAdd from '../components/FilterAdd';
import FiltersList from '../containers/FiltersList';
import { toggleFilterActiveState } from '../actions/filterActions';

const styles = {
  card: {
    paddingRight: '20px',
    paddingLeft: '20px',
    borderBottom: '1px solid #E1E1E1',
  },

  filterList: {
    paddingTop: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingBottom: '10px',
    backgroundColor: '#F5F5F5',
  },

  filterToggle: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  filterToggleLabelStyle: {
    color: '#757575',
    marginLeft: '10px',
  },
};

class Filter extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    filterActive: PropTypes.bool.isRequired,
  }

  handleFilterToggle = () => {
    const { dispatch } = this.props;
    dispatch(toggleFilterActiveState());
  }

  render() {
    const {
      filterActive,
    } = this.props;

    return (
      <div>
        <Card>
          <div style={styles.filterToggle}>
            <Toggle
              style={{ width: '73px' }}
              label="סינון"
              labelPosition="right"
              labelStyle={styles.filterToggleLabelStyle}
              defaultToggled
              onToggle={this.handleFilterToggle}
            />
          </div>

          {filterActive &&
            <div>
              <div style={styles.card}>
                <FilterAdd />
              </div>

              <div style={styles.filterList}>
                <FiltersList />
              </div>
            </div>
          }
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filterActive: state.filter.filterActive,
});

export default connect(mapStateToProps)(Filter);
