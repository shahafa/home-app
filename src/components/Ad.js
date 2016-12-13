/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import Chip from 'material-ui/Chip';
import _ from 'lodash';

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
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  rooms: PropTypes.number,
  parking: PropTypes.bool,
  elevator: PropTypes.bool,
  balcony: PropTypes.bool,
  renovated: PropTypes.bool,
  price: PropTypes.array,
  url: PropTypes.string,
  floor: PropTypes.number,
  meter: PropTypes.number,
};

export default Ad;
