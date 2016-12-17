import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFilters } from '../actions/filterActions';
import FilterItem from '../components/FilterItem';

class FiltersList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    filters: PropTypes.array,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFilters());
  }

  render() {
    const {
      filters,
    } = this.props;

    return (
      <div>
        {filters && filters.length !== 0 &&
          filters.map((filter, index) =>
            <div key={index}>
              <FilterItem filter={filter} />
            </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filter.filters,
});

export default connect(mapStateToProps)(FiltersList);
