import React, { useState, useEffect } from "react";
import './AgeDisplay.css'
const AgeDisplay = ({ birthDate, onClearStorage }) => {
  const [age, setAge] = useState(calculateAge(birthDate));


  function calculateAge(birthDate) {

    const now = new Date()
    const diff = Math.abs(now - birthDate)
    
    const diffYearsFloat = diff/ (1000 * 60 * 60 * 24 * 365.25);
    const diffYears = Math.floor(diffYearsFloat);

    const fractionalPart = diffYearsFloat - diffYears;
    const limitedFractional = fractionalPart.toFixed(9)
    const fractionalString = limitedFractional.toString().split('.')[1] || '000000000'
    const fractional = fractionalString.padStart(9, '0')

    return {diffYears, fractional};
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge(birthDate));
    }, 100);

    return () => clearInterval(interval);

  }, [birthDate]);


  return(
    <>
      <div className="container">
        <h2 id="ageText">age</h2>
         <div className="age-container">
            <h1 id="year">{age.diffYears}</h1>
            <h2 id="fractional">.{age.fractional}</h2>
          </div>
      </div>
          <button id="resetButton" onClick={onClearStorage}>reset</button>
    </>
  )
}

export default AgeDisplay;
