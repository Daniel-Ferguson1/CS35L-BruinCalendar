import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { useHistory } from 'react-router-dom';

// https://www.npmjs.com/package/react-datetime
// https://thecodeangle.com/top-10-date-pickers-in-react/

export const GoToEventPage = (date) => {
  const history = useHistory().push('/event-page');
}


export const PickDateTime = () => {
  let setDateTime = (e) => {
    const dateValue = e.toDate();
    console.log(dateValue);
    alert(dateValue)
  };
  return (
    <div>
      <h2>React Date Time</h2>
      <Datetime value={setDateTime} input={false} onChange={setDateTime} />
    </div>
  );
};