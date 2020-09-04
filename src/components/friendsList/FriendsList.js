import React from 'react';
import styles from './Friends.module.css';
import PropTypes from 'prop-types';

const styleColor = (param) => ({
  backgroundColor: param ? 'green' : 'red'
});

function FriendsList(friendsProp) {
  return (
    <ul className={styles.friend_list}>
      {friendsProp.info.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span className={styles.status} style={styleColor(friend.isOnline)}>{friend.isOnline}</span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
    friendsProp: PropTypes.array.isRequired,
};

export default FriendsList;
