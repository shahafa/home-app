import React, { Component, PropTypes } from 'react';
import _ from 'lodash/function';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';

const styles = {
  searchBox: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    paddingRight: '10px',
    paddingTop: '5px',
  },

  searchTextBox: {
    color: 'white',
    direction: 'rtl',
    marginRight: '5px',
    marginTop: '-12px',
  },

  clearButton: {
    marginTop: '-12px',
  },
};

class SearchBox extends Component {
  static propTypes = {
    searchAds: PropTypes.func.isRequired,
    searchAdsReset: PropTypes.func.isRequired,
  }

  state = {
    searchQuery: '',
  };

  search = _.debounce(() => {
    const { searchAds } = this.props;

    searchAds(this.state.searchQuery);
  }, 500);

  searchBoxChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });

    this.search();
  }

  clearButtonClick = () => {
    const { searchAdsReset } = this.props;

    this.setState({
      searchQuery: '',
    });

    searchAdsReset();
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <div style={styles.searchBox}>
        <SearchIcon color="#B3B3B3" />
        <TextField
          style={styles.searchTextBox}
          hintText="חיפוש..."
          fullWidth
          underlineShow={false}
          value={searchQuery}
          onChange={this.searchBoxChange}
        />
        {searchQuery &&
          <IconButton style={styles.clearButton}>
            <ClearIcon color="#B3B3B3" onTouchTap={this.clearButtonClick} />
          </IconButton>
        }
      </div>
    );
  }
}

export default SearchBox;
