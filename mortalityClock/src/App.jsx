import { useState } from 'react'
import './App.css'
import DateInput from './DateInput'
import AgeDisplay from './AgeDisplay';

function App() {

  const [date, setDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate)
  };

  return (
    <>
      <DateInput onDateChange={handleDateChange}></DateInput>
      <AgeDisplay birthDate={date} ></AgeDisplay>
    </>
  )
}

export default App
