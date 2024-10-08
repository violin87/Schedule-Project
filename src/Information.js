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

  const deleteWeekButton = () => {

      setDisplayWeek('')
      setWeekInfo('')
    }

  const deleteDataButton = () => {

     setDisplayDate('')
     setFullDate('')
  }

  const buttonTimeDelete = () => {

    setDisplayEnsemble('')
    setEnsembleTime('')
  }


  const buttonRepertoireDelete = () => {
    setDisplayRepertoire('')
    setRepertoire('')

  }

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
      <button onClick={deleteWeekButton}>Delete Week</button>
      <h1 className='weekInfo'>Week Information: {displayWeek}</h1>
      

      {/* Full Date Input */}
      <label htmlFor="newDateInfo">Full Date</label>
      <input
        id="newDateInfo"
        className="newDateInfo"
        value={fullDate}
        onChange={fullDateHandler}
      />
      <button onClick={buttonAddFullData}>Add Date</button>
      <button onClick={deleteDataButton}> Delete Data</button>
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
      <button onClick={buttonTimeDelete}> Delete Time </button>
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
      <button onClick={buttonRepertoireDelete}> Delete Repertoire </button>
      <h1>Repertoire Information: {displayRepertoire}</h1>
    </div>
  );
}

export default Information;




















