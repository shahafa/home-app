import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getAds } from '../actions/adsActions';
import AdsList from '../components/AdsList';

class AdsListContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    ads: PropTypes.array,
  }

  componentWillMount() {
    const {
      dispatch,
      date,
      ads,
    } = this.props;

    if (dispatch && date && ads === null) {
      dispatch(getAds(this.props.date));
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      dispatch,
      date,
      ads,
    } = nextProps;

    if (dispatch && date && ads === null) {
      dispatch(getAds(this.props.date));
    }
  }

  render() {
    const {
      ads,
    } = this.props;

    return (
      <AdsList ads={ads} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ads: state.ads[ownProps.date] ? state.ads[ownProps.date] : null,
});

export default connect(mapStateToProps)(AdsListContainer);
