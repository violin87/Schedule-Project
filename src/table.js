import React, { useState, useEffect } from 'react';

const StudentTable = () => {
  const [students, setStudents] = useState([
    { firstName: 'Claire', lastName: 'L' },
    { firstName: 'Linus', lastName: 'Ip' },
    { firstName: 'Shah', lastName: 'S' },
    { firstName: 'Juliano', lastName: 'A' },
    { firstName: 'Ice', lastName: 'B' },
    { firstName: 'Yoav', lastName: 'T' }
  ]);
  
  const [timeSlots, setTimeSlots] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Effect to calculate time slots whenever the student list changes
  useEffect(() => {
    updateSchedule();
  }, [students]);

  const updateSchedule = () => {
    const startTimeBeforeBreak = 9.5; // 9:30 AM
    const breakStart = 11; // 11:00 AM
    const breakEnd = 11.5; // 11:30 AM
    const endTimeAfterBreak = 12.5; // 12:30 PM

    const numStudents = students.length;
    if (numStudents === 0) return;

    const totalTimeBeforeBreak = (breakStart - startTimeBeforeBreak) * 60;
    const totalTimeAfterBreak = (endTimeAfterBreak - breakEnd) * 60;
    
    const numStudentsBeforeBreak = Math.ceil(numStudents / 2);
    const numStudentsAfterBreak = numStudents - numStudentsBeforeBreak;

    let remainingMinutesBeforeBreak = totalTimeBeforeBreak % numStudentsBeforeBreak;
    let remainingMinutesAfterBreak = totalTimeAfterBreak % numStudentsAfterBreak;

    const minutesPerStudentBeforeBreak = Math.floor(totalTimeBeforeBreak / numStudentsBeforeBreak);
    const minutesPerStudentAfterBreak = Math.floor(totalTimeAfterBreak / numStudentsAfterBreak);

    let currentTime = startTimeBeforeBreak;
    const newTimeSlots = [];

    // Time slots before the break
    for (let i = 0; i < numStudentsBeforeBreak; i++) {
      let adjustedMinutes = minutesPerStudentBeforeBreak;
      if (remainingMinutesBeforeBreak > 0) {
        adjustedMinutes += 1;
        remainingMinutesBeforeBreak--;
      }

      const startTimeString = formatTime(currentTime);
      currentTime += adjustedMinutes / 60;
      const endTimeString = formatTime(currentTime);

      newTimeSlots.push(`${startTimeString} - ${endTimeString}`);
    }

    // Skip the break
    currentTime = breakEnd;

    // Time slots after the break
    for (let i = numStudentsBeforeBreak; i < numStudents; i++) {
      let adjustedMinutes = minutesPerStudentAfterBreak;
      if (remainingMinutesAfterBreak > 0) {
        adjustedMinutes += 1;
        remainingMinutesAfterBreak--;
      }

      const startTimeString = formatTime(currentTime);
      currentTime += adjustedMinutes / 60;
      const endTimeString = formatTime(currentTime);

      newTimeSlots.push(`${startTimeString} - ${endTimeString}`);
    }

    setTimeSlots(newTimeSlots);
  };

  const formatTime = (decimalTime) => {
    const hours = Math.floor(decimalTime);
    const minutes = Math.round((decimalTime - hours) * 60);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const addStudent = () => {
    if (firstName && lastName) {
      setStudents([...students, { firstName, lastName }]);
      setFirstName('');
      setLastName('');
      setShowForm(false);
    } else {
      alert('Please enter both first and last names.');
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Student First Name</th>
            <th>Student Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{timeSlots[index]}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td><button onClick={() => deleteStudent(index)}>Delete</button></td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" style={{ textAlign: 'center', fontWeight: 'bold' }}>Break: 11:00 AM - 11:30 AM</td>
          </tr>
        </tbody>
      </table>

      {showForm ? (
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button onClick={addStudent}>Add Student</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Student</button>
      )}
    </div>
  );
};

export default StudentTable;









































