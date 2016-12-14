import React from 'react';
import { Card } from 'material-ui/Card';
import FilterAdd from '../components/FilterAdd';
import FiltersList from '../components/FiltersList';

const styles = {
  card: {
    padding: '20px',
    backgroundColor: '#F5F5F5',
  },
};

const Filter = () => (
  <div>
    <Card style={styles.card}>
      <FilterAdd />
      <FiltersList />
    </Card>
  </div>
);

export default Filter;
