import React from 'react';

export default function Controls(props) {
  const { time, handleSetTime } = props;
  return (
    <div>
      <input
        name="time"
        type="range"
        min={0}
        max={86400000}
        value={time}
        onChange={handleSetTime}
      />
      <div>{time}</div>
      <div>{new Date(Math.round(time)).toISOString().slice(11, -5)}</div>
    </div>
  );
}
