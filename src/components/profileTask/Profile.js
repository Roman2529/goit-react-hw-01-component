import React from 'react';
import { ProfDescription } from './ProfileDescription.js';
import { StatsProd } from './StatsList.js';
import user from '../../assets/user.json';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.profile}>
      <ProfDescription
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <StatsProd stats={user.stats} />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
