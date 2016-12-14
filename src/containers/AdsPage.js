import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Waypoint from 'react-waypoint';
import AdsCard from './AdsCard';
import Filter from '../components/Filter';

const styles = {
  filter: {
    marginTop: '40px',
  },

  adsCard: {
    marginTop: '40px',
  },
};

class AdsPage extends React.Component {
  static propTypes = {
    isLoadingAds: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      startDate: moment().startOf('day'),
    };
  }

  addDay = () => {
    if (this.props.isLoadingAds) return;

    this.setState({
      startDate: this.state.startDate.subtract(1, 'day'),
    });
  }

  adsCardList() {
    const elements = [];
    let index = 0;

    for (let currentDay = moment().startOf('day'); currentDay.isAfter(this.state.startDate) || currentDay.isSame(this.state.startDate); currentDay.subtract(1, 'day')) {
      elements.push(
        <div style={styles.adsCard} key={index} >
          <AdsCard date={moment(currentDay)} />
        </div>);

      index += 1;
    }

    return elements;
  }

  renderWaypoint() {
    if (!this.props.isLoadingAds) {
      return (
        <Waypoint onEnter={this.addDay} />
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        <div style={styles.filter}>
          <Filter />
        </div>

        {this.adsCardList()}

        {this.renderWaypoint()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingAds: state.ads.getAdsInit,
});

export default connect(mapStateToProps)(AdsPage);
