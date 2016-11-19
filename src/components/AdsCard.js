import React from 'react';
import moment from 'moment';
import { Card, CardText } from 'material-ui/Card';
import AdsList from '../containers/AdsList';

class AdsCard extends React.Component {
  static propTypes = {
    day: React.PropTypes.object.isRequired,
  }

  dateTitle() {  
    if (this.props.day.isSame(moment(), 'd')) {
      return 'היום';
    } else if (this.props.day.isSame(moment().subtract(1, 'day'), 'd')) {
      return 'אתמול';
    } else {
      return this.props.day.format('L');
    }
  }

  render() {
    const titleStyle = {
      backgroundColor: '#1697A6',
      height: '55px',
      paddingRight: '18px',
      direction: 'rtl',
      color: 'white',
      fontSize: '16px',
      lineHeight: '55px',
      fontWeight: 'lighter'
    }

    return (
      <Card>
        <CardText style={{padding: '0px'}}>
          <div
            style={titleStyle}
          >
            {this.dateTitle()}
          </div>

          <div style={{padding: '20px'}}>
            <AdsList day={this.props.day}/>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default AdsCard;
