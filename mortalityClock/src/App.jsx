import { useState } from 'react'
import './App.css'
import DateInput from './DateInput'
import AgeDisplay from './AgeDisplay';

function App() {
  const savedDate = localStorage.getItem('birthDate')

  const [date, setDate] = useState(savedDate ? new Date(savedDate) : null);

  function clearStorage() {
    localStorage.removeItem('birthDate');
    setDate(null); 
  }

  const handleDateChange = (newDate) => {
    setDate(newDate);
    localStorage.setItem('birthDate', newDate.toISOString());
  };

  return (
    <>
      {date === null 
      ? <DateInput onDateChange={handleDateChange} /> 
      : <AgeDisplay birthDate={date} />}
      <button onClick={clearStorage}>clearStorage</button>
    </>
  )
}

export default App
