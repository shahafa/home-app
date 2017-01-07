/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import moment from 'moment';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TimelineIcon from 'material-ui/svg-icons/action/timeline';
import IconButton from 'material-ui/IconButton';

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
    fontSize: '14px',
    color: 'black',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },

  favoriteCheckbox: {
    marginTop: '-3px',
  },

  descriptionContainer: {
    marginBottom: '20px',
    fontSize: '14px',
  },

  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    fontSize: '14px',
  },

  chip: {
    margin: 4,
    direction: 'rtl',
    fontSize: '14px',
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
  priceChanged,
  priceHistory,
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
        <div style={styles.descriptionContainer}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      }

      {price &&
        <div style={styles.priceContainer}>
          <div>
            {price} ש״ח
          </div>

          {priceChanged &&
            <div>
              <IconButton
                style={styles.priceChanged}
                tooltip={
                  priceHistory.reverse().map((p, index) =>
                    <div key={index}>
                      {moment(p.date).format('L')} - {p.price} ש״ח
                    </div>)}
                tooltipPosition="top-right"
                disableTouchRipple
                touch
              >
                <TimelineIcon color="#757575" />
              </IconButton>
            </div>
          }
        </div>
      }
    </div>

    <div style={styles.chipsWrapper}>
      {rooms &&
        <Chip style={styles.chip}>
          {`${rooms} חדרים`}
        </Chip>
      }

      <Chip style={styles.chip}>
        {floor ? `קומה ${floor}` : 'קומת קרקע'}
      </Chip>

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
  priceChanged: PropTypes.bool,
  priceHistory: PropTypes.array,
  isFavorite: PropTypes.bool,
  onFavoriteButtonChecked: PropTypes.func,
};

export default Ad;
