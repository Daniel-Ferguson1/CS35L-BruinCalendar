import React, { useState } from "react";
// import ReactDOM from 'react-dom';
// import ReactCalendar from "./ReactCalendar";
import Search from "./Search";
import EventList from './EventList'
import Sidebar from '../feature/Sidebar';
import Header from './Header';
import "../index.css";
import 'react-bootstrap';
import "./HomePage.css"
//import Users from './Users'

import ReactCalendar from "react-calendar"; 
import './Calendar.css';
// import { BiAlarmSnooze } from "react-icons/bi";

export const HomePage = () => {
  const [ calendarEntry, unhideEvent ] = useState(new Date());
  const initialDate = new Date();
  let [mo, dat, ye] = initialDate.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/");
  const [entryDate, setEntryDate] = useState(`${ye}-${mo}-${dat}`);
  // this entryDate has clicked date
  const [ formattedDate, setFormattedDate ] = useState(initialDate.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"}).split("/"));
  // to show in the heading of the eventlist

	const handleClick = (calendarEntry) => {
		const [month, date, year] = calendarEntry.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/");
		setEntryDate(`${year}-${month}-${date}`);
		setFormattedDate(calendarEntry.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"}).split("/"));
  }

  return (
    <div>
      <div className ="App">
          <Sidebar />
          <Header />
          <main className="container" link href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet">
            <ReactCalendar
					    value={calendarEntry}
					    onChange={unhideEvent}
					    calendarType={"US"} 
					    onClickDay={handleClick}
				    /> 
            <Search />
          </main>
          <div className='eventlist'>
            <EventList dateClicked={entryDate} dateFormatted={formattedDate} />
          </div>
      </div>
    </div>  
  );
}
export default HomePage;

