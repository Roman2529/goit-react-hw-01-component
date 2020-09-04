import React from 'react';
import statisticalData from '../../assets/statistical-data.json';
import { StatisticsList } from './StatisticsList.js';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics() {
    return (
      <section className={styles.statistics}>
        <StatisticsList title="Upload stats" stats={statisticalData} />
      </section>
    );
};


StatisticsList.defaultProps = {
  statisticalData: PropTypes.shape({
    title: '',
  }),
};

Statistics.propTypes = {
  statisticalData: PropTypes.shape({
    title: PropTypes.string,
    stats: PropTypes.arrayOf.isRequired,
  }),
};

export default Statistics;
