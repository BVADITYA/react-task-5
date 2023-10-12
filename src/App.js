import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  
  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="App">
      <div className="age-calculator-box">
        <h1 className="calculator-title">Age Calculator</h1>
        <h4 className="calculator-label">Enter your date of birth:</h4>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button className="calculate-button" onClick={calculateAge}>Calculate Age</button>
        {age && <p className="result">Your age is: {age} years</p>}
      </div>
    </div>
  );
}

export default App;
