import React from "react";
import ReactDOM from 'react-dom';
import ReactCalendar from "./components/ReactCalendar";
import Search from "./components/Search";
import Sidebar from './feature/Sidebar';
import "./index.css";
import bruin_logo from "./Bruin.png"

class App extends React.Component {
    render() {
        return (
            <div className ="App">
                <Sidebar />
                <header>
                    <div id="logo">
                        <span>
                            <img className="b_logo" src={bruin_logo} alt="this is Bruin logo" />
                            <b className="larger">-Cal</b>
                        </span>
                    </div>
                </header>
                <main className="container">
                  <ReactCalendar />
                  <Search />
                </main>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
