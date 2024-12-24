import React, { useState, useEffect } from "react";

const AgeDisplay = ({ birthDate }) => {
  const[age, setAge] = useEffect(calculateAge(birthDate))



  console.log(now)

  
  function calculateAge(birthDate) {

    const now = new Date()
    const diff = Math.abs(now - birthDate)
    
    const diffYearsFloat = diff/ (1000 * 60 * 60 * 24 * 365.25);
    const diffYears = Math.floor(diffYearsFloat);

    const fractionalPart = diffYearsFloat - diffYears;
    const limitedFractional = fractionalPart.toFixed(8)

    return {diffYears, limitedFractional};
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge(birthDate));
    }, 1000);

    return () => clearInterval(interval);

  }, [birthDate]);


  console.log("now=" + now)
  console.log("yearsFloat=" + diffYearsFloat)
  console.log("years=" + diffYears)
  console.log("limitedFractional= " + limitedFractional)
  console.log("birthdate= " + birthDate)
  console.log("diff= " + diff)

  return(

    <>
      <h1 id="year">{age.diffYears}</h1>
      <h2 id="fractional">{age.limitedFractional}</h2>
    </>

  )
}

export default AgeDisplay;
