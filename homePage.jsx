import React from "react";
import ReactDOM from 'react-dom';
import ReactCalendar from "./ReactCalendar";
import Search from "./Search";
import Eventlist from './Eventlist'
import Sidebar from '../feature/Sidebar';
import Header from './Header';
import "../index.css";
import 'react-bootstrap'
//import Users from './Users'


function homePage() {
  return (
    <div>
      <div className ="App">
          <Sidebar />
          <Header />
          <main className="container" link href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet">
            <ReactCalendar />
            <Search />
          </main>
          <div className='eventlist'>
              <Eventlist />
          </div>
      </div>
    </div>  
  );
}
export default homePage;

