import { connect } from 'react-redux';
import AdsCard from '../components/AdsCard';

const mapStateToProps = state => ({
  ads: state.ads.searchResults,
  title: 'תוצאות חיפוש',
});

export default connect(mapStateToProps)(AdsCard);
