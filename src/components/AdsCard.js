import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Divider from 'material-ui/Divider';
import { Card, CardText } from 'material-ui/Card';
import Ad from './Ad';

class AdsCard extends React.Component {
  static propTypes = {
    // date: React.PropTypes.object.isRequired,
  }

  static lineStyle = {
    position: 'absolute',
    display: 'block',
    top: '-4px',
    left: '35px',
    borderLeft: '2px solid #e0e0e0',
    height: '100%',
    zIndex: '1'
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <div style={AdsCard.lineStyle} />

        <div style={{ textAlign: 'right', width: '100%' }}>
        </div>
        <Card>
          <CardText>
            {data.ads &&
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
                  <Divider />
                }
              </div>
            )}
          </CardText>
        </Card>
      </div>
    );
  }
}

const AD_QUERY = gql`
  query Ad($date: Int!) {
    ads(page: $date) {
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

export default graphql(AD_QUERY, {
  options: ({ date }) => ({ variables: { date } })
})(AdsCard);
