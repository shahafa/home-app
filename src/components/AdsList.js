import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Ad from './Ad';
import Loading from './Loading';
import NoAdsFound from './NoAdsFound';

const styles = {
  divider: {
    marginTop: '20px',
    marginBottom: '20px',
  },
};

const AdsList = ({
  ads,
}) => (
  <div>
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
        <div key={index}>
          <Ad
            title={ad.title}
            description={ad.description}
            rooms={ad.rooms}
            parking={ad.parking}
            elevator={ad.elevator}
            balcony={ad.balcony}
            renovated={ad.renovated}
            price={ad.price}
            url={ad.url}
            floor={ad.floor}
            meter={ad.meter}
          />
          {ads.length - 1 !== index &&
            <Divider style={styles.divider} />
          }
        </div>)}
  </div>
);

AdsList.propTypes = {
  ads: PropTypes.array,
};

export default AdsList;
