import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
  },
};

class Ad extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    rooms: React.PropTypes.number,
    parking: React.PropTypes.bool,
    elevator: React.PropTypes.bool,
    balcony: React.PropTypes.bool,
    renovated: React.PropTypes.bool,
  }

  render() {
    return (
      <div>
        <div style={{ direction: 'rtl' }} dangerouslySetInnerHTML={{__html: this.props.title}} />
        <br/>
        <div style={{ direction: 'rtl' }} dangerouslySetInnerHTML={{__html: this.props.description}} />
        <br/>

        <div style={styles.wrapper}>
          {this.props.parking &&
            <Chip style={styles.chip}>
              חניה
            </Chip>
          }

          {this.props.elevator &&
            <Chip style={styles.chip}>
              מעלית
            </Chip>
          }

          {this.props.balcony &&
            <Chip style={styles.chip}>
              מרפסת
            </Chip>
          }

          {this.props.renovated &&
            <Chip style={styles.chip}>
              משופצת
            </Chip>
          }
        </div>
      </div>
    );
  }
}

export default Ad;
