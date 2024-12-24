import React, { useState } from "react";

const AgeDisplay = ({ birthDate }) => {
  const now = new Date()

  console.log(now)

  let diff = Math.abs(now - birthDate)

  const diffYearsFloat = diff/ (1000 * 60 * 60 * 24 * 365.25);


  console.log("now=" + now)
  console.log("years=" + diffYearsFloat)
  console.log("birthdate= " + birthDate)
  console.log("diff= " + diff)
}

export default AgeDisplay;
