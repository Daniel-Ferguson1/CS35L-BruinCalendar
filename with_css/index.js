import React from "react";
import ReactDOM from 'react-dom';
import Calendar from "./components/Calendar";

import "./App.css";

class App extends React.Component {
    render() {
        return ( 
            <div className ="App">
                <header>
                    <div id="logo">
                        <span className="icon">date_range</span>
                        <span>
                            react<b>calendar</b>
                        </span>
                    </div>
                </header>
                <main>
                    <Calendar />
                </main>
            </div>
        );
    }
}

ReactDOM.render(<Calendar />, document.querySelector("#root"));