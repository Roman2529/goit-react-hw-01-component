import React from 'react';
import styles from './Profile.module.css';

export function ProfDescription(props) {
  return (
    <div className={styles.description}>
      <img
        src={props.avatar}
        alt="user avatar"
        className={styles.avatar}
      />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.tag}>{props.tag}</p>
      <p className={styles.location}>{props.location}</p>
    </div>
  );
}

