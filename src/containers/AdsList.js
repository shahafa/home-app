import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Divider from 'material-ui/Divider';
import Ad from '../components/Ad';
import Loading from '../components/Loading';
import NoAdsFound from '../components/NoAdsFound';

class AdsCard extends React.Component {
  static propTypes = {
    day: React.PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;

    const dividerStyle = {
      marginTop: '20px',
      marginBottom: '20px',
    }

    return (
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
         data.ads.map((ad, index)=>
          <div key={index}>
            <Ad
              title={ad.title}
              description={ad.description}
              rooms={ad.rooms}
              parking={ad.parking}
              elevator={ad.elevator}
              balcony={ad.balcony}
              renovated={ad.renovated}
            />

            {data.ads.length - 1 !== index &&
              <Divider style={dividerStyle} />
            }
          </div>
        )}
      </div>
    );
  }
}

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
    }
  }
`;

export default graphql(ADS_OF_DAY_QUERY, {
  options: ({ day }) => ({ variables: { day: day.utc().format() } })
})(AdsCard);
