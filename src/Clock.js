import React from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  return (
    <div className={styles.clock}>
      <div
        className={styles.hoursContainer}
        style={{ transform: `rotate(${'300'}deg)` }}
      >
        <div className={styles.hours}></div>
      </div>
      <div
        className={styles.minutesContainer}
        style={{ transform: `rotate(${'60'}deg)` }}
      >
        <div className={styles.minutes}></div>
      </div>
      <div
        className={styles.secondsContainer}
        style={{ transform: `rotate(${'225'}deg)` }}
      >
        <div className={styles.seconds}></div>
        <div className={styles.secondsIndicator}></div>
      </div>
    </div>
  );
}
