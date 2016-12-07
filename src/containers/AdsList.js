import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Divider from 'material-ui/Divider';
import Ad from '../components/Ad';
import Loading from '../components/Loading';
import NoAdsFound from '../components/NoAdsFound';

const styles = {
  divider: {
    marginTop: '20px',
    marginBottom: '20px',
  },
};

const AdsCard = ({ data }) => (
  <div>
    {/* loading */}
    {data.loading === true &&
      <Loading />
    }

    {/* no ads found */}
    {data.ads && data.ads.length === 0 &&
      <NoAdsFound />
    }

    {/* ads list */}
    {data.ads && data.ads.length !== 0 &&
      data.ads.map((ad, index) =>
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
          {data.ads.length - 1 !== index &&
            <Divider style={styles.divider} />
          }
        </div>)}
  </div>
  );

AdsCard.propTypes = {
  data: React.PropTypes.object.isRequired,
};

const ADS_OF_DAY_QUERY = gql`
  query AdsOfDay($day: String!) {
    ads: adsOfDay(day: $day) {
      title
      description
      rooms
      parking
      elevator
      balcony
      renovated
      url
      floor
      meter
      price {
        date
        price
      }
    }
  }
`;

export default graphql(ADS_OF_DAY_QUERY, {
  options: ({ day }) => ({ variables: { day: day.utc().format() } }),
})(AdsCard);
