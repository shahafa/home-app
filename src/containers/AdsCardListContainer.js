import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Waypoint from 'react-waypoint';
import AdsCardContainer from './AdsCardContainer';

const styles = {
  adsCard: {
    marginBottom: '40px',
  },
};

class AdsCardList extends React.Component {
  static propTypes = {
    isLoadingAds: PropTypes.bool.isRequired,
    reloadRequired: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      startDate: moment().startOf('day'),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { reloadRequired } = nextProps;

    if (reloadRequired) {
      this.state = {
        startDate: moment().startOf('day'),
      };
    }
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
          <AdsCardContainer date={moment(currentDay)} />
        </div>);

      index += 1;
    }

    return elements;
  }

  renderWaypoint() {
    if (!this.props.isLoadingAds && !this.props.reloadRequired) {
      return (
        <Waypoint onEnter={this.addDay} />
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        {this.adsCardList()}

        {this.renderWaypoint()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingAds: state.ads.getAdsInit,
  reloadRequired: state.ads.reloadRequired,
});

export default connect(mapStateToProps)(AdsCardList);