import _ from 'lodash';
import React from 'react';
import Chip from 'material-ui/Chip';

class Ad extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    rooms: React.PropTypes.number,
    parking: React.PropTypes.bool,
    elevator: React.PropTypes.bool,
    balcony: React.PropTypes.bool,
    renovated: React.PropTypes.bool,
    price: React.PropTypes.array,
    url: React.PropTypes.string,
    floor: React.PropTypes.number,
    meter: React.PropTypes.number,
  }

  render() {
    const styles = {
      chip: {
        margin: 4,
        direction: 'rtl',
      },

      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
      },
    };

    return (
      <div>
        <div style={{ direction: 'rtl' }}>
          {this.props.title &&
            <div>
              <a target="_blank" href={this.props.url} style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}><div dangerouslySetInnerHTML={{__html: this.props.title}} /></a>
              <br/>
            </div>
          }

          {this.props.description &&
            <div>
              <div dangerouslySetInnerHTML={{__html: this.props.description}} />
              <br/>
            </div>
          }

          {_.last(this.props.price) &&
            <div>
              <div>
                {parseInt(_.last(this.props.price).price, 10).toLocaleString()} ש״ח
              </div>
              <br/>
            </div>
          }
        </div>

        <div style={styles.wrapper}>
          {this.props.floor &&
            <Chip style={styles.chip}>
              קומה {this.props.floor}
            </Chip>
          }

          {this.props.elevator &&
            <Chip style={styles.chip}>
              מעלית
            </Chip>
          }

          {this.props.renovated &&
            <Chip style={styles.chip}>
              משופצת
            </Chip>
          }

          {this.props.parking &&
            <Chip style={styles.chip}>
              חניה
            </Chip>
          }

          {this.props.meter &&
            <Chip style={styles.chip}>
              {`${this.props.meter} מ״ר`}
            </Chip>
          }

          {this.props.balcony &&
            <Chip style={styles.chip}>
              מרפסת
            </Chip>
          }
        </div>
      </div>
    );
  }
}

export default Ad;
