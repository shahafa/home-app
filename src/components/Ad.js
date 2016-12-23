/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  rtl: {
    direction: 'rtl',
  },

  titleContainer: {
    display: 'flex',
    marginBottom: '20px',
  },

  title: {
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },

  favoriteCheckbox: {
    marginTop: '-3px',
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
  isFavorite,
  onFavoriteButtonChecked,
}) => (
  <div>
    <div style={styles.rtl}>
      {title &&
        <div style={styles.titleContainer}>
          <a
            target="_blank"
            href={url}
            rel="noopener noreferrer"
            style={styles.title}
          >
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </a>

          <Checkbox
            checked={isFavorite}
            onCheck={onFavoriteButtonChecked}
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
          />
        </div>
      }

      {description &&
        <div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <br />
        </div>
      }

      {price &&
        <div>
          <div>
            {price} ש״ח
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
  price: PropTypes.number,
  url: PropTypes.string,
  floor: PropTypes.number,
  meter: PropTypes.number,
  isFavorite: PropTypes.bool,
  onFavoriteButtonChecked: PropTypes.func,
};

export default Ad;
