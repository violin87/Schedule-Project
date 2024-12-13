import React, { useState } from 'react';

const Information = ({ onDataSubmit }) => {
  const [weekInfo, setWeekInfo] = useState('');
  const [fullDate, setFullDate] = useState('');
  const [seminarLength, setSeminarLength] = useState(''); // Seminar length in minutes
  const [breakStart, setBreakStart] = useState('');
  const [startSeminar, setStartSeminar] = useState('')
  const [endSeminar, setEndSeminar]  = useState('')
  const [breakEnd, setBreakEnd] = useState('');
  const [amountofStudents, setAmountofStudents] = useState('')

  const handleSubmit = () => {
    const seminarData = {
      weekInfo,
      fullDate,
      seminarLength: parseInt(seminarLength, 10), // Convert to number
      breakStart,
      breakEnd,
      startSeminar,
      endSeminar,
      amountofStudents
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

    

      <h3>Date</h3>
      <input
        type="date"
        placeholder="Day/Month/Year"
        value={fullDate}
        onChange={(e) => setFullDate(e.target.value)}
      />

      <h3>Overall Seminar Length</h3>
      <input
        type="number"
        placeholder="Length in minutes (e.g., 180)"
        value={seminarLength}
        onChange={(e) => setSeminarLength(e.target.value)}
      />

      <h3> Amount of Students </h3>

      <input

      type = 'number'
      placeholder='Amount of Students'
      value = {amountofStudents}
      onChange = {(e) => setAmountofStudents(e.target.value)}
      />

      <h3> Seminar Starts </h3>

<input
type= 'time'
placeholder = 'Start Time'
value= {startSeminar}
onChange= {(e) => setStartSeminar(e.target.value)} 
/>




<h3> Seminar Ends </h3>
  <input
  type = 'time'
  placeholder = 'Start Time'
  value = {endSeminar}
  onChange = {(e) => setEndSeminar(e.target.value)}
  />


 
   
      <h3>Break Start</h3>
      <input
        type="time"
        placeholder="Start Time (e.g., 11:00 AM)"
        value={breakStart}
        onChange={(e) => setBreakStart(e.target.value)}
      />

      <h3>Break End</h3>
      <input
        type="time"
        placeholder="End Time (e.g., 11:30 AM)"
        value={breakEnd}
        onChange={(e) => setBreakEnd(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Information;





















