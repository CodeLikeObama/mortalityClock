import { useState } from 'react'
import './App.css'
import DateInput from './DateInput'

function App() {

  const [date, setDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate)
  };

  return (
    <>
      <DateInput onDateChange={handleDateChange}></DateInput>
    </>
  )
}

export default App
