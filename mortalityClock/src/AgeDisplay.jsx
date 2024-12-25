import React, { useState, useEffect } from "react";

const AgeDisplay = ({ birthDate }) => {
  const [age, setAge] = useState(calculateAge(birthDate));


  function calculateAge(birthDate) {

    const now = new Date()
    const diff = Math.abs(now - birthDate)
    
    const diffYearsFloat = diff/ (1000 * 60 * 60 * 24 * 365.25);
    const diffYears = Math.floor(diffYearsFloat);

    const fractionalPart = diffYearsFloat - diffYears;
    const limitedFractional = fractionalPart.toFixed(9)
    const fractional = Math.floor(limitedFractional * 1000000000)

    console.log("now=" + now)
    console.log("yearsFloat=" + diffYearsFloat)
    console.log("years=" + diffYears)
    console.log("limitedFractional= " + limitedFractional)
    console.log("birthdate= " + birthDate)
    console.log("diff= " + diff)

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
      <h1 id="year">{age.diffYears}</h1>
      <h2 id="fractional">{age.fractional}</h2>
    </>

  )
}

export default AgeDisplay;
