import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import AddFilter from './AddFilter';
import FiltersList from './FiltersList';
import ToggleFilterButton from './ToggleFilterButton';

const styles = {
  toggleFilterButton: {
    paddingTop: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingBottom: '15px',
  },

  addFilter: {
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingBottom: '20px',
  },

  filterList: {
    paddingTop: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingBottom: '10px',
    backgroundColor: '#F5F5F5',
    borderTop: '1px solid #E1E1E1',
  },
};

const Filter = ({
  neighborhoodsList,
  filterActive,
  onActiveFilterToggle,
  filterVisible,
  onFilterVisibleButtonClick,
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
  onNeighborhoodSelect,
  onFromRoomsSelect,
  onToRoomsSelect,
  onFromFloorSelect,
  onToFloorSelect,
  onFromPriceSelect,
  onToPriceSelect,
  onRenovatedCheck,
  onElevatorCheck,
  onParkingCheck,
  onAddFilterButtonClick,
  onDeleteFilterButtonClick,
  filtersList,
}) => (
  <div>
    <Card>
      <div style={styles.toggleFilterButton}>
        <ToggleFilterButton
          onToggle={onActiveFilterToggle}
          onFilterVisibleButtonClick={onFilterVisibleButtonClick}
          filterVisible={filterVisible}
        />
      </div>

      {filterActive && filterVisible &&
        <div>
          <div style={styles.addFilter}>
            <AddFilter
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
              onNeighborhoodSelect={onNeighborhoodSelect}
              onFromRoomsSelect={onFromRoomsSelect}
              onToRoomsSelect={onToRoomsSelect}
              onFromFloorSelect={onFromFloorSelect}
              onToFloorSelect={onToFloorSelect}
              onFromPriceSelect={onFromPriceSelect}
              onToPriceSelect={onToPriceSelect}
              onRenovatedCheck={onRenovatedCheck}
              onElevatorCheck={onElevatorCheck}
              onParkingCheck={onParkingCheck}
              onAddFilterButtonClick={onAddFilterButtonClick}
            />
          </div>

          {filtersList.length !== 0 &&
            <div style={styles.filterList}>
              <FiltersList
                filtersList={filtersList}
                onDeleteFilterButtonClick={onDeleteFilterButtonClick}
              />
            </div>
          }
        </div>
      }
    </Card>
  </div>
);

Filter.propTypes = {
  filterActive: PropTypes.bool.isRequired,
  onActiveFilterToggle: PropTypes.func.isRequired,
  filterVisible: PropTypes.bool.isRequired,
  onFilterVisibleButtonClick: PropTypes.func.isRequired,
  neighborhoodsList: PropTypes.array,
  neighborhood: PropTypes.string,
  fromRooms: PropTypes.number,
  toRooms: PropTypes.number,
  fromFloor: PropTypes.number,
  toFloor: PropTypes.number,
  fromPrice: PropTypes.number,
  toPrice: PropTypes.number,
  renovated: PropTypes.bool.isRequired,
  elevator: PropTypes.bool.isRequired,
  parking: PropTypes.bool.isRequired,
  onNeighborhoodSelect: PropTypes.func.isRequired,
  onFromRoomsSelect: PropTypes.func.isRequired,
  onToRoomsSelect: PropTypes.func.isRequired,
  onFromFloorSelect: PropTypes.func.isRequired,
  onToFloorSelect: PropTypes.func.isRequired,
  onFromPriceSelect: PropTypes.func.isRequired,
  onToPriceSelect: PropTypes.func.isRequired,
  onRenovatedCheck: PropTypes.func.isRequired,
  onElevatorCheck: PropTypes.func.isRequired,
  onParkingCheck: PropTypes.func.isRequired,
  onAddFilterButtonClick: PropTypes.func.isRequired,
  onDeleteFilterButtonClick: PropTypes.func.isRequired,
  filtersList: PropTypes.array,
};

export default Filter;
