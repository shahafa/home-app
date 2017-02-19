import { connect } from 'react-redux';
import { searchAds, searchAdsReset } from '../actions/adsActions';
import SearchBox from '../components/SearchBox';

export default connect(null, { searchAds, searchAdsReset })(SearchBox);
