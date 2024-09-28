import React, { useState, useEffect } from 'react';
import generateDynamicSlots from './dynamicTiming'; // Adjust the path as needed

function Table() { 
  const breakSlot = {
    start: '11:00 AM',
    end: '11:30 AM',
    isBreak: true, // Flag as break
  };
  
  const [nameData, setNameData] = useState('');
  const [repData, setRepData] = useState('');
  const [studentsName, setStudentsName] = useState([]);
  const [studentRepertoire, setStudentRepertoire] = useState([]);
  const [slots, setSlots] = useState([breakSlot]); 

  // Effect to initialize or update slots on studentsName change
  useEffect(() => {
    if (studentsName.length >= 0) {
      const { morningSlots, afternoonSlots } = generateDynamicSlots(studentsName.length);
      setSlots([...morningSlots, breakSlot, ...afternoonSlots]);
    }
  }, [studentsName, studentRepertoire]); // Re-run the effect when studentsName updates

  const handleNameEvent = (e) => {
    setNameData(e.target.value);
  };

  const handleRepEvent = (e) => {
    setRepData(e.target.value);
  };

  const handleAddSlot = () => {
    if (nameData && repData) {
      // Update the student names and repertoires
      const newStudents = [...studentsName, nameData];
      const newRepertoire = [...studentRepertoire, repData];

      // Update state with new values
      setStudentsName(newStudents);
      setStudentRepertoire(newRepertoire);

      // Clear the input fields
      setNameData('');
      setRepData('');
    } else {
      alert('Please enter both a name and a repertoire.');
    }
  };

  return (
    <div>
      <h1>Week {}</h1>

      <table>
        <tbody>
          <tr>
            <th className='time'>Time</th>
            <th className='name'>Conductor</th>
            <th className='repertoire'>Repertoire</th>
          </tr>

          {slots.map((slot, index) => (
            <tr key={index}>
              {slot.isBreak ? (
                <td colSpan="3" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Break: {slot.start} - {slot.end}
                </td>
              ) : (
                <>
                  <td>{slot.start} - {slot.end}</td> {/* Display slot time */}
                  <td>{studentsName[index] || 'No Name'}</td> {/* Match time with corresponding name */}
                  <td>{studentRepertoire[index] || 'No Repertoire'}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <label htmlFor='name'>Student Name</label>
      <input
        id='name'
        className='name'
        value={nameData}
        onChange={handleNameEvent}
      />

      <label htmlFor='repertoire'>Repertoire</label>
      <input
        id='repertoire'
        className='repertoire'
        value={repData}
        onChange={handleRepEvent}
      />

      <button onClick={handleAddSlot}>Add Slot</button>
    </div>
  );
}

export default Table;

































// import React, { useState } from 'react';
// import generateDynamicSlots from './dynamicTiming'; // Adjust the path as needed

// function Table() {
//   const [nameData, setNameData] = useState(''); 
//   const [repData, setRepData] = useState('');
//   const [studentsTime, setStudentsTimeTable] = useState([]);
//   const [studentsName, setStudentsName] = useState([]);
//   const [studentRepertoire, setStudentRepertoire] = useState([]);
//   const [slots, setSlots] = useState([]); 

//   const handleNameEvent = (e) => {
//     setNameData(e.target.value);
//   };

//   const handleRepEvent = (e) => {
//     setRepData(e.target.value);
//   };

//   const handleDataTable = () => {
//     const totalStudents = studentsName.length + 1; // Including the current one being added
//     const generatedSlots = generateDynamicSlots(totalStudents); // Pass the number of students
//     setSlots(generatedSlots);
//     setNameData('');
//     setRepData('');
//   };

//   const handleStudentNameTable = () => {
//     setStudentsName([...studentsName, nameData]);
//     setNameData(''); 
//   };

//   const handleStudentRepertoireTable = () => {
//     setStudentRepertoire([...studentRepertoire, repData]);
//     setRepData('');
//   };

//   return (
//     <div>
//       <h1>Week {}</h1>

//       <table>
//         <tbody>
//           <tr>
//             <th className='time'>Time</th>
//             <th className='name'>Conductor</th>
//             <th className='repertoire'>Repertoire</th>
//           </tr>

//           {slots.map((slot, index) => (
//             <tr key={index}>
//               {slot.isBreak ? (
//                 <td colSpan="3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Break: {slot.start} - {slot.end}</td>
//               ) : (
//                 <>
//                   <td>{slot.start} - {slot.end}</td> {/* Display slot time */}
//                   <td>{studentsName[index] || 'No Name'}</td> {/* Match time with corresponding name */}
//                   <td>{studentRepertoire[index] || 'No Repertoire'}</td>
//                 </>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>


//       <label id='name' name='name'></label>
//       <input
//         id='name'
//         className='name'
//         value={nameData}
//         onChange={handleNameEvent}
//       />
//       <button onClick={handleStudentNameTable}>Add Name</button>

//       <label id='repertoire' name='repertoire'></label>
//       <input
//         id='repertoire'
//         className='repertoire'
//         value={repData}
//         onChange={handleRepEvent}
//       />
//       <button onClick={handleStudentRepertoireTable}>Add Repertoire</button>
//     </div>
//   );
// }

// export default Table;
































// import React from 'react'
// import { useState } from 'react'


// function Table () {



// const [data, setData] = useState('')
// const [studentsTime, setStudentsTimeTable] = useState([])
// const [studentsName, setStudentsName] = useState([])


// const handleDataEvent = (e) => {


//      setData(e.target.value)
//  }


//  const handleDataTable = () => {

//       setStudentsTimeTable([...studentsTime, data])
//       setData('')

//  }

//  const handleStudentNameTable = () => {

//      setStudentsName([...studentsName, data])
//      setData('')

//  }

//       return (

//     <div>

//       <h1> Week {}</h1>
//       <h1> {}</h1>
//       <h1>  </h1>
//       <h1>  </h1>

//      <table>
//         <tbody>
//         <tr>
//         <th className = 'time'>  Time</th>
//         <th className = 'name'> Conductor</th>
//         <th className='program'> Excerpt </th>
//        </tr>
          

//      {/* Table Info */}

//         {studentsTime.map((studentTime, time) => (   //check with week about Index


//               <tr key={time}>
//               <td>{studentTime}</td>
              
//          </tr>
//       ))}
// {/* 
//       Student infor in the table */}

//       {studentsName.map((studentName, name) => {

//         <tr key = {name}> 
//         <td> {studentName} </td>

//         </tr>



//       })}
//     </tbody>
//   </table>

//   <label id = 'time' name =  'time'>Student Time  </label>
//   <input id = 'time' className='time'  value = {data} onChange = {handleDataEvent}></input>
//  <button onClick={handleDataTable}> Add Time </button>

//  <label id = 'name' name =  'name'> Student Name </label>
//   <input id = 'name' className='name'  value = {data} onChange = {handleDataEvent}></input>
//  <button onClick={handleStudentNameTable}> Add Name </button>
       

//     </div>

//      )

// }


// export default Table 