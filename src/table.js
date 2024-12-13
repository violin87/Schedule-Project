import React, { useState, useEffect } from 'react';

const StudentTable = ({ seminarData }) => {
  const [students, setStudents] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  const { weekInfo, fullDate, startSeminar, endSeminar, amountofStudents, breakStart, breakEnd } = seminarData || {};

  useEffect(() => {
    if (seminarData) updateSchedule();
  }, [seminarData, students]);

  
  const updateSchedule = () => {
    if (
      !startSeminar ||
      !endSeminar ||
      !breakStart ||
      !breakEnd ||
      amountofStudents <= 0
    ) {
      setTimeSlots([]);
      console.error("Missing or invalid input values.");
      return;
    }
  
    // Convert times to decimal format
    const startSeminarDecimal = convertToDecimal(startSeminar);
    const endSeminarDecimal = convertToDecimal(endSeminar);
    const breakStartDecimal = convertToDecimal(breakStart);
    const breakEndDecimal = convertToDecimal(breakEnd);
  
    // Validate times
    if (
      startSeminarDecimal >= endSeminarDecimal ||
      breakStartDecimal < startSeminarDecimal ||
      breakEndDecimal > endSeminarDecimal ||
      breakStartDecimal >= breakEndDecimal
    ) {
      setTimeSlots([]);
      console.error("Invalid seminar or break times.");
      return;
    }
  
    // Calculate durations in minutes
    const totalSeminarMinutes = (endSeminarDecimal - startSeminarDecimal) * 60;
    const breakMinutes = (breakEndDecimal - breakStartDecimal) * 60;
    const availableMinutes = totalSeminarMinutes - breakMinutes;
  
    if (availableMinutes <= 0) {
      setTimeSlots([]);
      console.error("Not enough time for students after accounting for the break.");
      return;
    }
  
    // Calculate time per student
    const timePerStudent = availableMinutes / amountofStudents;
  
    const newTimeSlots = [];
    let beforeBreakTime = startSeminarDecimal;
    let afterBreakTime = breakEndDecimal;
  
    for (let i = 0; i < amountofStudents; i++) {
      if (i % 2 === 0) {
        // Assign before-break timeslot
        const startTimeString = formatTime(beforeBreakTime);
        beforeBreakTime += timePerStudent / 60;
  
        // Ensure timeslot does not overlap the break
        if (beforeBreakTime > breakStartDecimal) {
          beforeBreakTime = breakStartDecimal;
        }
  
        const endTimeString = formatTime(beforeBreakTime);
        newTimeSlots.push(`${startTimeString} - ${endTimeString}`);
      } else {
        // Assign after-break timeslot
        const startTimeString = formatTime(afterBreakTime);
        afterBreakTime += timePerStudent / 60;
  
        // Ensure timeslot does not exceed seminar end time
        if (afterBreakTime > endSeminarDecimal) {
          afterBreakTime = endSeminarDecimal;
        }
  
        const endTimeString = formatTime(afterBreakTime);
        newTimeSlots.push(`${startTimeString} - ${endTimeString}`);
      }
    }
  
    setTimeSlots(newTimeSlots);
  };
  
    const convertToDecimal = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour + minute / 60;
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

  const deleteStudents = () => {
    setStudents([]);
    setTimeSlots([]);
  };

  return (
    <div>
      <h2>{`Week: ${weekInfo || ''}`}</h2>
      <h3>{`Date: ${fullDate || ''}`}</h3>
      <h4>{`Seminar: ${startSeminar || ''} - ${endSeminar || ''}`}</h4>
      <h4>{`Break: ${breakStart || ''} - ${breakEnd || ''}`}</h4>
      <h4>{`Amount of Students: ${amountofStudents || ''}`}</h4>

      <button onClick={addStudent}>Add Student</button>
      <button onClick={deleteStudents}>Clear All Students</button>
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
        <tr>
            <td>{breakStart}</td>
            <td>{breakEnd}</td>
            <td>Break</td>
        </tr>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{timeSlots[index]}</td>
              <td>
                <input
                  type="text"
                  placeholder="First Name"
                  value={student.firstName}
                  onChange={(e) =>
                    saveStudent(index, e.target.value, student.lastName)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={student.lastName}
                  onChange={(e) =>
                    saveStudent(index, student.firstName, e.target.value)
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










































