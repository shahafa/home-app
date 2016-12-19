import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AdsCard from '../components/AdsCard';

const AdsCardContainer = ({
  date,
  adsNumber,
}) => (
  <AdsCard
    date={date}
    adsNumber={adsNumber}
  />
);

AdsCardContainer.propTypes = {
  date: PropTypes.object.isRequired,
  adsNumber: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  adsNumber: state.ads[ownProps.date.utc().format()] ?
              state.ads[ownProps.date.utc().format()].length : 0,
});

export default connect(mapStateToProps)(AdsCardContainer);
