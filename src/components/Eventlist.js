import React, { useState, useEffect} from 'react';
import {useAuth} from '../contexts/AuthContext'
import firebase from 'firebase/app'
import 'firebase/firestore';
import { Button } from 'react-bootstrap';
import EventDetailWindow from './EventDetailWindow';
import { Modal } from  './Modal';
import './EventList.css'

export const EventList = ({
  dateClicked: day,
  dateFormatted: dateFormatted,
}) => {
  const { currentUser } = useAuth();
  const db = firebase.firestore();
  const [events, setEvents] = useState([]);
  const [ selectedEvent, setSelectedEvent ] = useState(undefined);
  const [ isWindowOpen, setIsWindowOpen ] = useState(false);

  const onEventSelected = event => {
    setSelectedEvent(event);
    setIsWindowOpen(true);
  }

  const onCloseDetailWindow = () => {
    setSelectedEvent(undefined);
    setIsWindowOpen(false);
  }


  useEffect(() => {
		const fetchEvents = async () => {
			const data = await db.collection("events").where('date', '==', day).get()
      let usersEvents = [];
      for (let item of data.docs){
        let event = item.data()
        if(event.userId == currentUser.email || event.guest == currentUser.email){
          usersEvents.push(event)
        }
      }
			setEvents(usersEvents)
		}
		fetchEvents()
	}, [dateFormatted]) 

  var convertTime = require('convert-time');

  return (
    <>
      <h2 class="title">Events on { dateFormatted } </h2>
      <div class="listview">
        <ul class="listview">
        {events.length > 0
          ? events.map((event) =>
          {
            return <li><Button className="name" onClick={() => onEventSelected(event)}>{event.eventName}</Button>
            <p class="time">{convertTime(event.time, 'hh:mm A')}</p>
            </li>
          })
          : <li class="noevents">No events to display</li>
        }
        </ul>
        <Modal
          isOpen={isWindowOpen}
          onClose={onCloseDetailWindow}>
          <EventDetailWindow 
            item={selectedEvent}
            date={dateFormatted}
            close={onCloseDetailWindow} />
        </Modal>
      </div>
    </>
  );
}
export default EventList;