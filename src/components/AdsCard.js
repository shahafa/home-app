import React, { PropTypes } from 'react';
import moment from 'moment';
import { Card, CardText } from 'material-ui/Card';
import AdsListContainer from '../containers/AdsListContainer';

function title(date, adsNumber) {
  let titleString;
  if (date.local().isSame(moment(), 'd')) {
    titleString = 'היום';
  } else if (date.local().isSame(moment().subtract(1, 'day'), 'd')) {
    titleString = 'אתמול';
  } else {
    titleString = date.format('L');
  }

  if (!adsNumber || adsNumber === 0) {
    return titleString;
  }

  return `${titleString} (${adsNumber})`;
}

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

const AdsCard = ({
  date,
  adsNumber,
}) => (
  <Card>
    <CardText style={styles.card}>
      <div style={styles.title}>
        {title(date, adsNumber)}
      </div>

      <div style={styles.adsList}>
        <AdsListContainer date={date.utc().format()} />
      </div>
    </CardText>
  </Card>
);

AdsCard.propTypes = {
  date: PropTypes.object.isRequired,
  adsNumber: PropTypes.number.isRequired,
};

export default AdsCard;
