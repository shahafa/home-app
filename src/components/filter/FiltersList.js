/* eslint-disable react/no-array-index-key */

import React, { PropTypes } from 'react';
import FilterItem from './FilterItem';

const FiltersList = ({
  filtersList,
  onDeleteFilterButtonClick,
}) => (
  <div>
    {filtersList && filtersList.length !== 0 &&
      filtersList.map((filter, index) =>
        <div key={index}>
          <FilterItem
            filter={filter}
            onDeleteFilterButtonClick={onDeleteFilterButtonClick}
          />
        </div>)
    }
  </div>
);

FiltersList.propTypes = {
  filtersList: PropTypes.array,
  onDeleteFilterButtonClick: PropTypes.func.isRequired,
};

export default FiltersList;
