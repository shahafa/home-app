import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import Waypoint from 'react-waypoint';
import AdsCard from '../components/AdsCard';

class AdsPage extends React.Component {
  static propTypes = {
    isLoadingAds: React.PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      lastDay: moment().startOf('day'),
    }
  }

  addDayToLastDay = () => {
    if (this.props.isLoadingAds) return;

    this.setState({
      lastDay: this.state.lastDay.subtract(1, 'day')
    })
  }

  adsCardList() {
    let elements = [];
    let index = 0

    for (let currentDay = moment().startOf('day'); currentDay.isAfter(this.state.lastDay) || currentDay.isSame(this.state.lastDay); currentDay.subtract(1, 'day')) {
      elements.push(<div style={{marginTop: '40px'}} key={index} >
                      <AdsCard day={moment(currentDay)} />
                    </div>);
      index += 1;
    }

    return elements;
  }

  renderWaypoint() {
    if (!this.props.isLoadingAds) {
      return (
        <Waypoint onEnter={this.addDayToLastDay}/>
      );
    }
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

function isLoadingAds(queries) {
  for (let query in queries) {
    if (queries[query].loading === true) {
      return true;
    }
  }

  return false;
}

const mapStateToProps = (state) => ({
  isLoadingAds: isLoadingAds(state.apollo.queries)
})

export default connect(
  mapStateToProps
)(AdsPage)
