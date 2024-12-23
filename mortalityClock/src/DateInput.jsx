import React, { useState } from "react";

const DateInput = ({ onDateChange }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateChange(new Date(date));
  };

  return(
    <form onSubmit={handleSubmit}>
      <label>Enter your birthdate:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Start</button>
    </form>
  );
};

export default DateInput;
