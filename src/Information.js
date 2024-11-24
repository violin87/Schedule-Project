import React, { useState } from 'react';

const Information = ({ onDataSubmit }) => {
  const [weekInfo, setWeekInfo] = useState('');
  const [fullDate, setFullDate] = useState('');
  const [breakStart, setBreakStart] = useState('');
  const [breakEnd, setBreakEnd] = useState('');

  const handleSubmit = () => {
    const seminarData = {
      weekInfo,
      fullDate,
      breakStart,
      breakEnd,
    };
    onDataSubmit(seminarData); // Pass data to parent or sibling
  };

  return (
    <div>
      <h3>Week Information</h3>
      <input
        type="text"
        placeholder="Week"
        value={weekInfo}
        onChange={(e) => setWeekInfo(e.target.value)}
      />

      <h3>Date & Time</h3>
      <input
        type="text"
        placeholder="Time/Day/Month/Year"
        value={fullDate}
        onChange={(e) => setFullDate(e.target.value)}
      />

      <h3>Break Start</h3>
      <input
        type="text"
        placeholder="Start Time (e.g., 11:00 AM)"
        value={breakStart}
        onChange={(e) => setBreakStart(e.target.value)}
      />

      <h3>Break End</h3>
      <input
        type="text"
        placeholder="End Time (e.g., 11:30 AM)"
        value={breakEnd}
        onChange={(e) => setBreakEnd(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Information;




















