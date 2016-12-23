import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import AdContainer from '../containers/AdContainer';
import Loading from './Loading';
import NoAdsFound from './NoAdsFound';

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

const Favorites = ({
  favorites,
}) => (
  <Card>
    <CardText style={styles.card}>
      <div style={styles.title}>מועדפים</div>

      <div style={styles.adsList}>
        {/* loading */}
        {!favorites &&
          <Loading />
        }

        {/* no ads found */}
        {favorites && favorites.length === 0 &&
          <NoAdsFound />
        }

        {/* ads list */}
        {favorites && favorites.length !== 0 &&
          favorites.map((ad, index) =>
            <div key={index}>
              <AdContainer ad={ad} />

              {favorites.length - 1 !== index &&
                <Divider style={styles.divider} />
              }
            </div>)
        }
      </div>
    </CardText>
  </Card>
);

Favorites.propTypes = {
  favorites: PropTypes.array,
};

export default Favorites;
