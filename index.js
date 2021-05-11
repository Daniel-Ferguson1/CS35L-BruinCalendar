import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import './index.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  };
  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  );
}

ReactDOM.render(<ReactCalendar />, document.querySelector("#root"));