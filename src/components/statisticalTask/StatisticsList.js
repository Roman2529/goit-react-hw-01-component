import React from 'react';
import styles from './Statistics.module.css';
import Color from './ColorRandom.js';

export function StatisticsList(statss) {
  return (
    <>
    <h2 className={styles.title}>{statss.title}</h2>
    <ul className={styles.statList}>
      {statss.stats.map(stat => (
        <li key={stat.id} className={styles.item} style={{ backgroundColor: Color() }}>
          <span className={styles.label}>{stat.label}</span>{' '}
          <span className={styles.percentage}>{stat.percentage}</span>
        </li>
      ))}
      </ul>
    </>
  );
}
