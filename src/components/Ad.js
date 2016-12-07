/* eslint-disable react/no-danger */

import _ from 'lodash';
import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  rtl: {
    direction: 'rtl',
  },

  title: {
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'none',
  },

  chip: {
    margin: 4,
    direction: 'rtl',
  },

  chipsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
  },
};

const Ad = ({
  title,
  description,
  rooms,
  parking,
  elevator,
  balcony,
  renovated,
  price,
  url,
  floor,
  meter,
}) => (
  <div>
    <div style={styles.rtl}>
      {title &&
        <div>
          <a
            target="_blank"
            href={url}
            rel="noopener noreferrer"
            style={styles.title}
          >
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </a>
          <br />
        </div>
      }

      {description &&
        <div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <br />
        </div>
      }

      {_.last(price) &&
        <div>
          <div>
            {parseInt(_.last(price).price, 10).toLocaleString()} ש״ח
          </div>
          <br />
        </div>
      }
    </div>

    <div style={styles.chipsWrapper}>
      {rooms &&
        <Chip style={styles.chip}>
          {`${rooms} חדרים`}
        </Chip>
      }

      {floor &&
        <Chip style={styles.chip}>
          קומה {floor}
        </Chip>
      }

      {elevator &&
        <Chip style={styles.chip}>
          מעלית
        </Chip>
      }

      {renovated &&
        <Chip style={styles.chip}>
          משופצת
        </Chip>
      }

      {parking &&
        <Chip style={styles.chip}>
          חניה
        </Chip>
      }

      {meter &&
        <Chip style={styles.chip}>
          {`${meter} מ״ר`}
        </Chip>
      }

      {balcony &&
        <Chip style={styles.chip}>
          מרפסת
        </Chip>
      }
    </div>
  </div>
);

Ad.propTypes = {
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
};

export default Ad;
