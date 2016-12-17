import React from 'react';
import { Card } from 'material-ui/Card';
import FilterAdd from '../components/FilterAdd';
import FiltersList from '../containers/FiltersList';

const styles = {
  card: {
    paddingTop: '20px',
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
};

const Filter = () => (
  <div>
    <Card>
      <div style={styles.card}>
        <FilterAdd />
      </div>

      <div style={styles.filterList}>
        <FiltersList />
      </div>
    </Card>
  </div>
);

export default Filter;
