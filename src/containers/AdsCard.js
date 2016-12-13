import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, CardText } from 'material-ui/Card';
import AdsList from '../containers/AdsList';

const styles = {
  card: {
    padding: '0px',
  },

  title: {
    backgroundColor: '#1697A6',
    height: '55px',
    paddingRight: '18px',
    direction: 'rtl',
    color: 'white',
    fontSize: '16px',
    lineHeight: '55px',
    fontWeight: 'lighter',
  },

  adsList: {
    padding: '20px',
  },
};

class AdsCard extends React.Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    adsNumber: PropTypes.number.isRequired,
  }

  title() {
    let title;
    if (this.props.date.local().isSame(moment(), 'd')) {
      title = 'היום';
    } else if (this.props.date.local().isSame(moment().subtract(1, 'day'), 'd')) {
      title = 'אתמול';
    } else {
      title = this.props.date.format('L');
    }

    if (this.props.adsNumber === 0) {
      return title;
    }

    return `${title} (${this.props.adsNumber})`;
  }

  render() {
    return (
      <Card>
        <CardText style={styles.card}>
          <div style={styles.title}>
            {this.title()}
          </div>

          <div style={styles.adsList}>
            <AdsList date={this.props.date.utc().format()} />
          </div>
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  adsNumber: state.ads.ads[ownProps.date.utc().format()] ?
    state.ads.ads[ownProps.date.utc().format()].length : 0,
});

export default connect(mapStateToProps)(AdsCard);
