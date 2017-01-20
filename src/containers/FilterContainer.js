import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/filter/Filter';
import { getFilters, addFilter, deleteFilter, toggleFilterActiveState, getNeighborhoodsList, changeFilterVisibleState } from '../actions/filterActions';

const initialState = {
  neighborhood: null,
  fromRooms: null,
  toRooms: null,
  fromFloor: null,
  toFloor: null,
  fromPrice: null,
  toPrice: null,
  renovated: false,
  elevator: false,
  parking: false,
};

class FilterContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    filterActive: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
    filtersList: PropTypes.array,
    neighborhoodsList: PropTypes.array,
  }

  state = initialState;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFilters());
    dispatch(getNeighborhoodsList());
  }

  handleActiveFilterToggle = () => {
    const { dispatch } = this.props;
    dispatch(toggleFilterActiveState());

    this.setState(initialState);
  }

  handleNeighborhoodSelect = (event, index, value) => {
    this.setState({
      neighborhood: value,
    });
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
    if (JSON.stringify(this.state) === JSON.stringify(initialState)) {
      return;
    }

    const { dispatch } = this.props;
    dispatch(addFilter(this.state));

    this.setState(initialState);
  }

  handleDeleteButonClick = (filterId) => {
    const { dispatch } = this.props;
    dispatch(deleteFilter(filterId));
  }

  handleFilterVisibleButtonClick = () => {
    const { dispatch } = this.props;
    dispatch(changeFilterVisibleState());
  }

  render() {
    const {
      filterActive,
      visible,
      filtersList,
      neighborhoodsList,
    } = this.props;

    const {
      neighborhood,
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
        filterActive={filterActive}
        filterVisible={visible}
        filtersList={filtersList}
        neighborhoodsList={neighborhoodsList}
        neighborhood={neighborhood}
        fromRooms={fromRooms}
        toRooms={toRooms}
        fromFloor={fromFloor}
        toFloor={toFloor}
        fromPrice={fromPrice}
        toPrice={toPrice}
        renovated={renovated}
        elevator={elevator}
        parking={parking}
        onNeighborhoodSelect={this.handleNeighborhoodSelect}
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
        onFilterVisibleButtonClick={this.handleFilterVisibleButtonClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  filterActive: state.filter.filterActive,
  visible: state.filter.visible,
  filtersList: state.filter.filters,
  neighborhoodsList: state.filter.neighborhoodsList,
});

export default connect(mapStateToProps)(FilterContainer);
