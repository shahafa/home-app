import React, { PropTypes } from 'react';
import moment from 'moment';
import { Card, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import AdContainer from '../containers/AdContainer';
import Loading from './Loading';
import NoAdsFound from './NoAdsFound';

function generateTitle(title, adsNumber) {
  if (!adsNumber || adsNumber === 0) {
    return title;
  }

  return `${title} (${adsNumber})`;
}

function generateDateTitle(date, adsNumber) {
  let titleString;
  if (moment(date).local().isSame(moment(), 'd')) {
    titleString = 'היום';
  } else if (moment(date).local().isSame(moment().subtract(1, 'day'), 'd')) {
    titleString = 'אתמול';
  } else {
    titleString = moment(date).format('L');
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

  divider: {
    marginTop: '20px',
    marginBottom: '20px',
  },
};

const AdsCard = ({
  ads,
  date,
  title,
}) => (
  <Card>
    <CardText style={styles.card}>
      <div style={styles.title}>
        {title ? generateTitle(title, ads ? ads.length : 0) :
                 generateDateTitle(date, ads ? ads.length : 0)}
      </div>

      <div style={styles.adsList}>
        {/* loading */}
        {!ads &&
          <Loading />
        }

        {/* no ads found */}
        {ads && ads.length === 0 &&
          <NoAdsFound />
        }

        {/* ads list */}
        {ads && ads.length !== 0 &&
          ads.map((ad, index) =>
            <div key={ad.id}>
              <AdContainer ad={ad} />

              {ads.length - 1 !== index &&
                <Divider style={styles.divider} />
              }
            </div>)
        }
      </div>
    </CardText>
  </Card>
);

AdsCard.propTypes = {
  ads: PropTypes.array,
  date: PropTypes.string,
  title: PropTypes.string,
};

export default AdsCard;
