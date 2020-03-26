import React from 'react';

export default function Controls(props) {
  const { time, handleSetTime } = props;
  return (
    <div>
      <input
        name="time"
        type="range"
        min={0}
        max={86400}
        value={time}
        onChange={handleSetTime}
      />
      <div>{time}</div>
      <div>{new Date(time * 1000).toISOString().substr(11, 8)}</div>
    </div>
  );
}
