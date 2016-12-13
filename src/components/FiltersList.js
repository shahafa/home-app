import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFilters } from '../actions/filterActions';

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
    return (
      <div>
        { this.props.filters && this.props.filters.toString() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filter.filters,
});

export default connect(mapStateToProps)(FiltersList);
