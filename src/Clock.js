import React from 'react';
import styles from './Clock.module.css';

function angle(sec) {
  const hhmmss = new Date(sec * 1000).toISOString().substr(11, 8).split(':');
  const hours = (+hhmmss[0] / 12) * 360;
  const minutes = (+hhmmss[1] / 60) * 360;
  const seconds = (+hhmmss[2] / 60) * 360;
  return {
    hours: hours === 360 ? 0 : hours,
    minutes: minutes === 360 ? 0 : minutes,
    seconds: seconds === 360 ? 0 : seconds,
  };
}

export default function Clock(props) {
  const { time } = props;
  return (
    <div className={styles.clock}>
      <div
        className={styles.hoursContainer}
        style={{ transform: `rotate(${angle(time).hours}deg)` }}
      >
        <div className={styles.hours}></div>
      </div>
      <div
        className={styles.minutesContainer}
        style={{ transform: `rotate(${angle(time).minutes}deg)` }}
      >
        <div className={styles.minutes}></div>
      </div>
      <div
        className={styles.secondsContainer}
        style={{ transform: `rotate(${angle(time).seconds}deg)` }}
      >
        <div className={styles.seconds}></div>
        <div className={styles.secondsIndicator}></div>
      </div>
    </div>
  );
}
