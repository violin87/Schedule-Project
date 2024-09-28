import React, { useState } from 'react';

function Information() {
  const [weekInfo, setWeekInfo] = useState('');
  const [fullDate, setFullDate] = useState('');
  const [ensembleTime, setEnsembleTime] = useState('');
  const [repertoire, setRepertoire] = useState('');

  const [displayWeek, setDisplayWeek] = useState(''); // State to display week info in h1
  const [displayDate, setDisplayDate] = useState(''); // State to display full date in h1
  const [displayEnsemble, setDisplayEnsemble] = useState(''); // State to display ensemble time in h1
  const [displayRepertoire, setDisplayRepertoire] = useState(''); // State to display repertoire in h1

  // Handlers for input change
  const weekNumberHandler = (e) => {
    setWeekInfo(e.target.value);
  };

  const fullDateHandler = (e) => {
    setFullDate(e.target.value);
  };

  const ensembleTimeHandler = (e) => {
    setEnsembleTime(e.target.value);
  };

  const repertoireHandler = (e) => {
    setRepertoire(e.target.value);
  };

  // Button handlers to post the messages to h1
  const buttonAddWeek = () => {
    setDisplayWeek(weekInfo); // Display week info when button is clicked
  };

  const buttonAddFullData = () => {
    setDisplayDate(fullDate); // Display full date when button is clicked
  };

  const buttonAddEnsembleTime = () => {
    setDisplayEnsemble(ensembleTime); // Display ensemble time when button is clicked
  };

  const buttonRepertoire = () => {
    setDisplayRepertoire(repertoire); // Display repertoire when button is clicked
  };

  return (
    <div>
      {/* Week Input */}
      <label htmlFor="newWeekInfo">Week</label>
      <input
        id="newWeekInfo"
        className="newWeekInfo"
        value={weekInfo}
        onChange={weekNumberHandler}
      />
      <button onClick={buttonAddWeek}>Add Week</button>
      <h1>Week Information: {displayWeek}</h1>

      {/* Full Date Input */}
      <label htmlFor="newDateInfo">Full Date</label>
      <input
        id="newDateInfo"
        className="newDateInfo"
        value={fullDate}
        onChange={fullDateHandler}
      />
      <button onClick={buttonAddFullData}>Add Date</button>
      <h1>Full Date Information: {displayDate}</h1>

      {/* Ensemble Time Input */}
      <label htmlFor="newEnsTimeInfo">Ensemble Time</label>
      <input
        id="newEnsTimeInfo"
        className="newEnsTimeInfo"
        value={ensembleTime}
        onChange={ensembleTimeHandler}
      />
      <button onClick={buttonAddEnsembleTime}>Add Ensemble Time</button>
      <h1>Ensemble Time Information: {displayEnsemble}</h1>

      {/* Repertoire Input */}
      <label htmlFor="newRepertoireInfo">Repertoire</label>
      <input
        id="newRepertoireInfo"
        className="newRepertoireInfo"
        value={repertoire}
        onChange={repertoireHandler}
      />
      <button onClick={buttonRepertoire}>Add Repertoire</button>
      <h1>Repertoire Information: {displayRepertoire}</h1>
    </div>
  );
}

export default Information;




















// import React from 'react'
// import {useState} from 'react'

// function Information () {


//  const [weekInfo, setWeekInfo] = useState([])
//  const [fullDate, setFullDate] =  useState([])
//  const [repertoire, setRepertoire] = useState([])

//  const weekNumberHandler = (e) => {


//       setWeekInfo(e.target.value)
//  }

//  const datesTimeInformation = (e) => {



//      setFullDate(e.target.value)
//  }

//  const lessonTImeHandler = (e) => {


//      setFullDate(e.target.value)

//  }

//  const repertoireAddHandler = (e) => {


//      setRepertoire(e.target.value)

//  }

//  //buttons


//  const buttonAddWeek = () =>  {
   

//      console.log(weekInfo)



    



// }


// const buttonAddFullData = () =>  {

//     setFullDate(fullDate)

// }


// const buttonAddEnsembleTime= () =>  {

//     setFullDate(fullDate)



// }

// const buttonRepertoire = () =>  {

//     setRepertoire(repertoire)



// }



//     return (

//     <div>


// <label id = 'newWeekInfo' name = 'newWeekInfo'>  Week </label>
// <input id = 'newWeekInfo' className='newWeekInfo' value= {weekInfo} onChange={weekNumberHandler}></input>
// <button onClick = {buttonAddWeek}> Add Week</button>
// <h1> {buttonAddWeek}</h1>



// <label id = 'newDateInfo' name = 'newDateInfo'>  Full Date </label>
// <input id = 'newDateInfo' className='newDateInfo' value= {fullDate} onChange={datesTimeInformation}></input>
// <button onClick={buttonAddFullData}> Add Date</button>


// <label id = 'newEnsTimeInfo' name = 'newEnsTimeInfo'>  Ensemble Time </label>
// <input id = 'newEnsTimeInfo' className='newEnsTimeInfo' value = {fullDate} onChange={datesTimeInformation}></input>
// <button onClick = {lessonTImeHandler}> Ensemble Time </button>


// <label id = 'newRepertoireInfo' name = 'newRepertoireInfo'>  Repertoire </label>
// <input id = 'newRepertoireInfo' className='newRepertoireInfo' value = {repertoire} onChange={repertoireAddHandler}></input>
// <button onClick = {buttonRepertoire}> Add Repertoire</button>
// </div>
//     )

// }

// export default Information