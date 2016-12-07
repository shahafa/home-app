import React from 'react';
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
    day: React.PropTypes.object.isRequired,
  }

  title() {
    if (this.props.day.isSame(moment(), 'd')) {
      return 'היום';
    } else if (this.props.day.isSame(moment().subtract(1, 'day'), 'd')) {
      return 'אתמול';
    }

    return this.props.day.format('L');
  }

  render() {
    return (
      <Card>
        <CardText style={styles.card}>
          <div style={styles.title}>
            {this.title()}
          </div>

          <div style={styles.adsList}>
            <AdsList day={this.props.day} />
          </div>
        </CardText>
      </Card>
    );
  }
}

export default AdsCard;
