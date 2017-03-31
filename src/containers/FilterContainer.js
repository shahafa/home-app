import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import Filter from '../components/filter/Filter';
import { getFilters, addFilter, deleteFilter, toggleFilterActiveState, getNeighborhoodsList, changeFilterVisibleState } from '../actions/filterActions';

const initialFilterState = {
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
    visible: PropTypes.bool.isRequired,
    filtersList: PropTypes.array,
    neighborhoodsList: PropTypes.array,
    searchQuery: PropTypes.string,
  }

  state = {
    filter: initialFilterState,
    snackBarOpen: false,
    snackBarMessage: '',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFilters());
    dispatch(getNeighborhoodsList());
  }

  handleActiveFilterToggle = () => {
    const { dispatch } = this.props;
    dispatch(toggleFilterActiveState());

    this.setState({ filter: initialFilterState });
  }

  handleNeighborhoodSelect = (event, index, value) => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        neighborhood: value,
      }),
    });
  }

  handleFromRoomsSelect = (event, index, value) => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        fromRooms: value,
      }),
    });
  }

  handleToRoomsSelect = (event, index, value) => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        toRooms: value,
      }),
    });
  }

  handleFromFloorSelect = (event, index, value) => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        fromFloor: value,
      }),
    });
  }

  handleToFloorSelect = (event, index, value) => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        toFloor: value,
      }),
    });
  }

  handleFromPriceSelect = (event, index, value) => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        fromPrice: value,
      }),
    });
  }

  handleToPriceSelect = (event, index, value) => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        toPrice: value,
      }),
    });
  }

  handleRenovatedCheck = () => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        renovated: !this.state.filter.renovated,
      }),
    });
  }

  handleElevatorCheck = () => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        elevator: !this.state.filter.elevator,
      }),
    });
  }

  handleParkingCheck = () => {
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        parking: !this.state.filter.parking,
      }),
    });
  }

  handleAddFilterButonClick = () => {
    if (JSON.stringify(this.state.filter) === JSON.stringify(initialFilterState)) {
      this.setState({
        snackBarMessage: 'לא נבחרו פרמטרים לסינון',
        snackBarOpen: true,
      });

      return;
    }

    const { dispatch } = this.props;
    dispatch(addFilter(this.state.filter));

    this.setState({
      filter: initialFilterState,
      snackBarMessage: 'סינון הוסף',
      snackBarOpen: true,
    });
  }

  handleDeleteButonClick = (filterId) => {
    const { dispatch } = this.props;
    dispatch(deleteFilter(filterId));

    this.setState({
      filter: initialFilterState,
      snackBarMessage: 'סינון הוסר',
      snackBarOpen: true,
    });
  }

  handleFilterVisibleButtonClick = () => {
    const { dispatch } = this.props;
    dispatch(changeFilterVisibleState());
  }

  handleSnackBarClose = () => {
    this.setState({
      snackBarOpen: false,
    });
  }

  render() {
    const {
      visible,
      filtersList,
      neighborhoodsList,
      searchQuery,
    } = this.props;

    const {
      snackBarOpen,
      snackBarMessage,
    } = this.state;

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
    } = this.state.filter;

    return (
      <div>
        <Filter
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
          searchQuery={searchQuery}
        />

        <Snackbar
          open={snackBarOpen}
          bodyStyle={{ display: 'flex', flexDirection: 'row-reverse' }}
          message={snackBarMessage}
          autoHideDuration={3000}
          onRequestClose={this.handleSnackBarClose}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.filter.visible,
  filtersList: state.filter.filters,
  neighborhoodsList: state.filter.neighborhoodsList,
  searchQuery: state.ads.searchQuery,
});

export default connect(mapStateToProps)(FilterContainer);
