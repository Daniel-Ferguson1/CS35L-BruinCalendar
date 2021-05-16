import React, { useState } from "react";
import Calendar from "react-calendar";
import './ReactCalendar.css'

const ReactCalendar = () => {
  const [date, onChange] = useState(new Date());
  // const onChange = date => { setDate(date); };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default ReactCalendar;