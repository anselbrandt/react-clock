import React, { useState } from 'react';
import styles from './App.module.css';
import Clock from './Clock';
import Controls from './Controls';

function App() {
  const [time, setTime] = useState(0);

  const handleSetTime = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className={styles.app}>
      <Clock time={time} />
      <Controls time={time} handleSetTime={handleSetTime} />
    </div>
  );
}

export default App;
