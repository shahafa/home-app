import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import { getAds } from '../actions/adsActions';
import Ad from '../components/Ad';
import Loading from '../components/Loading';
import NoAdsFound from '../components/NoAdsFound';

const styles = {
  divider: {
    marginTop: '20px',
    marginBottom: '20px',
  },
};

class AdsList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    isLoadingAds: PropTypes.bool.isRequired,
    ads: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAds(this.props.date));
  }

  render() {
    const {
      ads,
      isLoadingAds,
    } = this.props;

    return (
      <div>
        {/* loading */}
        {isLoadingAds === true &&
          <Loading />
        }

        {/* no ads found */}
        {!isLoadingAds && ads.length === 0 &&
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
  }
}

const mapStateToProps = (state, ownProps) => ({
  ads: state.ads.ads[ownProps.date] ? state.ads.ads[ownProps.date] : [],
  isLoadingAds: state.ads.getAdsInit,
});

export default connect(mapStateToProps)(AdsList);
