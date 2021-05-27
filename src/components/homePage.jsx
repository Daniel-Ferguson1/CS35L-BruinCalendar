import React from "react";
import ReactDOM from 'react-dom';
import ReactCalendar from "./components/ReactCalendar";
import Search from "./components/Search";
import Eventlist from './components/Eventlist'
import Sidebar from './feature/Sidebar';
import "./index.css";
import 'react-bootstrap'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className ="App">
            <Sidebar />
            <header link href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet">
                <div id="logo">
                    <strong>Bruin Calendar</strong>
                </div>
            </header>
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
}

//ReactDOM.render(<App />, document.getElementById("root"));