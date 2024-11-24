import React, { useState, useEffect } from 'react';

const StudentTable = ({ seminarData }) => {
  const [students, setStudents] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  const { weekInfo, fullDate, breakStart, breakEnd } = seminarData || {};

  useEffect(() => {
    if (seminarData) updateSchedule();
  }, [seminarData, students]);

  const updateSchedule = () => {
    const startTimeBeforeBreak = 9.5; // Seminar start: 9:30 AM
    const numStudents = students.length || 1;

    const breakStartDecimal = convertToDecimal(breakStart);
    const breakEndDecimal = convertToDecimal(breakEnd);
    const endTimeAfterBreak = 12.5; // Seminar end: 12:30 PM

    const totalTimeBeforeBreak = (breakStartDecimal - startTimeBeforeBreak) * 60;
    const totalTimeAfterBreak = (endTimeAfterBreak - breakEndDecimal) * 60;

    const numStudentsBeforeBreak = Math.ceil(numStudents / 2);
    const numStudentsAfterBreak = numStudents - numStudentsBeforeBreak;

    const minutesPerStudentBeforeBreak = Math.floor(totalTimeBeforeBreak / numStudentsBeforeBreak);
    const minutesPerStudentAfterBreak = Math.floor(totalTimeAfterBreak / numStudentsAfterBreak);

    let currentTime = startTimeBeforeBreak;
    const newTimeSlots = [];

    // Time slots before the break
    for (let i = 0; i < numStudentsBeforeBreak; i++) {
      const startTimeString = formatTime(currentTime);
      currentTime += minutesPerStudentBeforeBreak / 60;
      const endTimeString = formatTime(currentTime);
      newTimeSlots.push(`${startTimeString} - ${endTimeString}`);
    }

    // Skip the break
    currentTime = breakEndDecimal;

    // Time slots after the break
    for (let i = 0; i < numStudentsAfterBreak; i++) {
      const startTimeString = formatTime(currentTime);
      currentTime += minutesPerStudentAfterBreak / 60;
      const endTimeString = formatTime(currentTime);
      newTimeSlots.push(`${startTimeString} - ${endTimeString}`);
    }

    setTimeSlots(newTimeSlots);
  };

  const convertToDecimal = (time) => {
    const [hour, minute] = time
      .split(':')
      .map((val) => parseInt(val.replace(/\D/g, '')));
    const isPM = time.toLowerCase().includes('pm');
    return (isPM && hour < 12 ? hour + 12 : hour) + minute / 60;
  };

  const formatTime = (decimalTime) => {
    const hours = Math.floor(decimalTime);
    const minutes = Math.round((decimalTime - hours) * 60);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const saveStudent = (index, firstName, lastName) => {
    const updatedStudents = [...students];
    updatedStudents[index] = { firstName, lastName };
    setStudents(updatedStudents);
  };

  const addStudent = () => {
    setStudents([...students, { firstName: '', lastName: '' }]);
  };

  const clearStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index] = { firstName: '', lastName: '' };
    setStudents(updatedStudents);
  };


  const deleteStudent = () => {


      setStudents('')


  }

  return (
    <div>
      <h2>{`Week: ${weekInfo}`}</h2>
      <h3>{`Date: ${fullDate}`}</h3>
      <h4>{`Break: ${breakStart} - ${breakEnd}`}</h4>
      <button onClick={addStudent}>Add Student</button>
      <button onClick={deleteStudent}> Delete Student</button>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, index) => (
            <tr key={index}>
              <td>{slot}</td>
              <td>
                <input
                  type="text"
                  placeholder="First Name"
                  value={students[index]?.firstName || ''}
                  onChange={(e) =>
                    saveStudent(index, e.target.value, students[index]?.lastName || '')
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={students[index]?.lastName || ''}
                  onChange={(e) =>
                    saveStudent(index, students[index]?.firstName || '', e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => clearStudent(index)}>Clear</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;









































