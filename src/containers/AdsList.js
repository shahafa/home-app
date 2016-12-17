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
    ads: PropTypes.array,
  }

  componentWillMount() {
    const {
      dispatch,
      date,
      ads,
    } = this.props;

    if (dispatch && date && ads === null) {
      dispatch(getAds(this.props.date));
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      dispatch,
      date,
      ads,
    } = nextProps;

    if (dispatch && date && ads === null) {
      dispatch(getAds(this.props.date));
    }
  }

  render() {
    const {
      ads,
    } = this.props;

    return (
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
  }
}

const mapStateToProps = (state, ownProps) => ({
  ads: state.ads[ownProps.date] ? state.ads[ownProps.date] : null,
});

export default connect(mapStateToProps)(AdsList);
