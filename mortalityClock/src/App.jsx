import { useState } from 'react'
import './App.css'
import DateInput from './DateInput'
import AgeDisplay from './AgeDisplay';

function App() {
  const savedDate = localStorage.getItem('birthDate')

  const [date, setDate] = useState(savedDate ? new Date(savedDate) : null);

 

  const handleDateChange = (newDate) => {
    setDate(newDate);
    localStorage.setItem('birthDate', newDate.toISOString());
  };

  return (
    <>
      <DateInput onDateChange={handleDateChange}></DateInput>
      <AgeDisplay birthDate={date} ></AgeDisplay>
    </>
  )
}

export default App
