import React, { useState } from "react";
import './DateInput.css'

const DateInput = ({ onDateChange }) => {
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateChange(new Date(date));
  };

  return(
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <label id="InputLabel">Enter your birthdate:</label>
          <input
            id="dateInput"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button id="startButton" type="submit">Start</button>
      </form>
  );
};

export default DateInput;
