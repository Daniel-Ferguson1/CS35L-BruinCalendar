import React, { useState } from "react";
import Calendar from "react-calendar";
import './ReactCalendar.css'

import Event from './Event'

function clickMe(){
  alert('You clicked me!');
}

const ReactCalendar = () => {
  const [date, onChange] = useState(new Date());

  function whenClickDay(date) {
    alert(date);
    // Send the date information to the DB and 
    // receive event information to Event.js
    return(
      <Event>
        Fancy Modal
      </Event>
    )
  }

  return (
    <div>
      <Calendar 
        onChange={onChange} 
        value={date} 
        calendarType={"US"} 
        onClickDay={whenClickDay}
      />
    </div>
  )
}

export default ReactCalendar;