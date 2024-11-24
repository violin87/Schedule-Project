import React, { useState } from 'react';
import Information from './Information';
import StudentTable from './table';

const App = () => {
  const [seminarData, setSeminarData] = useState(null);

  const handleDataSubmit = (data) => {
    setSeminarData(data);
  };

  return (
    <div>
      <Information onDataSubmit={handleDataSubmit} />
      {seminarData && <StudentTable seminarData={seminarData} />}
    </div>
  );
};

export default App;

