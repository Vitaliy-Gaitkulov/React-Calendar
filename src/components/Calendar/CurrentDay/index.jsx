import React, { Component } from 'react';
import { format } from 'date-fns';
import styles from './CurrentDay.module.css';

const CurrentDay = props => {
  const { currentDay } = props; // ОБъект Date
  return (
    <div className={styles.wrapper}>
      <div className={styles.dayName}>{format(currentDay, 'EEEE')}</div>
      <div className={styles.dayNumber}>{format(currentDay, 'd')}</div>
    </div>
  );
};

export default CurrentDay;
