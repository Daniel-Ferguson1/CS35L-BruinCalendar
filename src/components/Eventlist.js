import React, { useState, useEffect} from 'react';
import {useAuth} from '../contexts/AuthContext'
import firebase from 'firebase/app'
import 'firebase/firestore';

export const EventList = ({
  dateClicked: day,
  dateFormatted: dateFormatted,
}) => {
  const { currentUser } = useAuth()
  const db = firebase.firestore()
  const [events, setEvents] = useState([])

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

    return (
	  	<>
	  		<h2>Events on { dateFormatted } </h2>
        <ul>
        {events.length > 0
          ? events.map((event) =>
          {
            return <li>Event at {event.time} : {event.eventName}</li>
          })
          : <p>No events to display</p>
        }
        </ul>
	  	</>
  	);
}
export default EventList;