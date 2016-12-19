import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/filter/Filter';
import { getFilters, addFilter, deleteFilter, toggleFilterActiveState } from '../actions/filterActions';

class FilterContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    filterActive: PropTypes.bool.isRequired,
    filtersList: PropTypes.array,
  }

  state = {
    fromRooms: null,
    toRooms: null,
    fromFloor: null,
    toFloor: null,
    fromPrice: null,
    toPrice: null,
    renovated: false,
    elevator: false,
    parking: false,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFilters());
  }

  handleActiveFilterToggle = () => {
    const { dispatch } = this.props;
    dispatch(toggleFilterActiveState());
  }

  handleFromRoomsSelect = (event, index, value) => {
    this.setState({
      fromRooms: value,
    });
  }

  handleToRoomsSelect = (event, index, value) => {
    this.setState({
      toRooms: value,
    });
  }

  handleFromFloorSelect = (event, index, value) => {
    this.setState({
      fromFloor: value,
    });
  }

  handleToFloorSelect = (event, index, value) => {
    this.setState({
      toFloor: value,
    });
  }

  handleFromPriceSelect = (event, index, value) => {
    this.setState({
      fromPrice: value,
    });
  }

  handleToPriceSelect = (event, index, value) => {
    this.setState({
      toPrice: value,
    });
  }

  handleRenovatedCheck = () => {
    this.setState({
      renovated: !this.state.renovated,
    });
  }

  handleElevatorCheck = () => {
    this.setState({
      elevator: !this.state.elevator,
    });
  }

  handleParkingCheck = () => {
    this.setState({
      parking: !this.state.parking,
    });
  }

  handleAddFilterButonClick = () => {
    if (JSON.stringify(this.state) === JSON.stringify({
      fromRooms: null,
      toRooms: null,
      fromFloor: null,
      toFloor: null,
      fromPrice: null,
      toPrice: null,
      renovated: false,
      elevator: false,
      parking: false,
    })) {
      return;
    }

    const { dispatch } = this.props;
    dispatch(addFilter(this.state));

    this.setState({
      fromRooms: null,
      toRooms: null,
      fromFloor: null,
      toFloor: null,
      fromPrice: null,
      toPrice: null,
      renovated: false,
      elevator: false,
      parking: false,
    });
  }

  handleDeleteButonClick = (filterId) => {
    const { dispatch } = this.props;
    dispatch(deleteFilter(filterId));
  }

  render() {
    const {
      filterActive,
      filtersList,
    } = this.props;

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
    } = this.state;

    return (
      <Filter
        fromRooms={fromRooms}
        toRooms={toRooms}
        fromFloor={fromFloor}
        toFloor={toFloor}
        fromPrice={fromPrice}
        toPrice={toPrice}
        renovated={renovated}
        elevator={elevator}
        parking={parking}
        onFromRoomsSelect={this.handleFromRoomsSelect}
        onToRoomsSelect={this.handleToRoomsSelect}
        onFromFloorSelect={this.handleFromFloorSelect}
        onToFloorSelect={this.handleToFloorSelect}
        onFromPriceSelect={this.handleFromPriceSelect}
        onToPriceSelect={this.handleToPriceSelect}
        onRenovatedCheck={this.handleRenovatedCheck}
        onElevatorCheck={this.handleElevatorCheck}
        onParkingCheck={this.handleParkingCheck}
        onAddFilterButtonClick={this.handleAddFilterButonClick}
        onDeleteFilterButtonClick={this.handleDeleteButonClick}
        onActiveFilterToggle={this.handleActiveFilterToggle}
        filterActive={filterActive}
        filtersList={filtersList}
      />
    );
  }
}

const mapStateToProps = state => ({
  filterActive: state.filter.filterActive,
  filtersList: state.filter.filters,
});

export default connect(mapStateToProps)(FilterContainer);
