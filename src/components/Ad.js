/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import moment from 'moment';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TimelineIcon from 'material-ui/svg-icons/action/timeline';
import CircleIcon from 'material-ui/svg-icons/image/lens';
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

  priceChanged: {
    width: '24px',
    height: '24px',
    padding: '0px',
    marginRight: '10px',
    marginTop: '3px',
  },

  activeStatusContainer: {
    marginTop: '-8px',
    marginBottom: '20px',
    fontSize: '14px',
  },

  activeStatusContainer2: {
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

function activeDaysTitle(createdAt, unActiveDate) {
  let numberOfDays;
  if (unActiveDate) {
    numberOfDays = moment(unActiveDate).diff(moment(createdAt).startOf('day'), 'days') + 1;
  } else {
    numberOfDays = moment().diff(moment(createdAt).startOf('day'), 'days') + 1;
  }

  if (numberOfDays === 1) {
    return 'יום';
  }

  return `${numberOfDays} ימים`;
}

const Ad = ({
  createdAt,
  title,
  description,
  rooms,
  parking,
  elevator,
  balcony,
  renovated,
  price,
  contactName,
  phone,
  url,
  floor,
  meter,
  priceChanged,
  priceHistory,
  isFavorite,
  onFavoriteButtonChecked,
  isActive,
  unActiveDate,
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
                  priceHistory.filter(value => value !== null).reverse().map((p, index) =>
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

      {contactName && phone &&
        <div style={priceChanged ? styles.activeStatusContainer : styles.activeStatusContainer2}>
          {`${contactName} - ${phone}`}
        </div>
      }

      <div style={priceChanged ? styles.activeStatusContainer : styles.activeStatusContainer2}>
        {isActive ?
          <div>
            <CircleIcon color="#4CAF50" style={{ width: '8px', height: '8px' }} />
            &nbsp;&nbsp;מודעה פעילה
            &nbsp;({activeDaysTitle(createdAt)})
          </div> :
          <div>
            <CircleIcon color="#f44336" style={{ width: '8px', height: '8px' }} />
            &nbsp;&nbsp;מודעה לא פעילה
            &nbsp;(הופיעה בלוח {activeDaysTitle(createdAt, unActiveDate)})
          </div>
        }
      </div>
    </div>

    <div style={styles.chipsWrapper}>
      {rooms !== 0 && rooms &&
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
  contactName: PropTypes.string,
  phone: PropTypes.string,
  url: PropTypes.string,
  floor: PropTypes.number,
  meter: PropTypes.number,
  priceChanged: PropTypes.bool,
  priceHistory: PropTypes.array,
  isFavorite: PropTypes.bool,
  onFavoriteButtonChecked: PropTypes.func,
  isActive: PropTypes.bool,
  createdAt: PropTypes.string,
  unActiveDate: PropTypes.string,
};

export default Ad;
