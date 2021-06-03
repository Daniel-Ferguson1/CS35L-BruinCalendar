// import { app } from '../firebase.js';

import React, { useState, useEffect } from "react";
import './Search.css'
import SearchField from "react-search-field";
import firebase from 'firebase/app'
import 'firebase/firestore';
// import AddComment from './AddComment'
import EventDetailWindow from './EventDetailWindow';
import { Modal } from  './Modal';
import {Button} from 'react-bootstrap';
 

 const choices = [
   { key: "choice1", description: "Event Search" },
   { key: "choice2", description: "Friend Search" },
 ];

 const Search = () => {
    const [input, setInput] = React.useState("");
    // const [selectedChoices, setSelectedChoices] = useState(choices);
    const [events, setEvents] = useState([]);

    const [ selectedEvent, setSelectedEvent ] = useState(undefined);
    const [ isWindowOpen, setIsWindowOpen ] = useState(false);
    const [ dateFormatted, setDateFormatted ] = useState('');

    const onEventSelected = event => {
      setSelectedEvent(event);
      setIsWindowOpen(true);
      setDateFormatted(event.date);
    }
  

    const onCloseDetailWindow = () => {
      setSelectedEvent(undefined);
      setIsWindowOpen(false);
    }



    useEffect(() => {
        const searchVars = input.split(' ')
        const fetchEvents = async () => {
        const db = firebase.firestore()
        const data = await db.collection("events").where('searchValues', 'array-contains-any',
        searchVars).get()
        //console.log('woo')
        //console.log(data.docs)
        setEvents(data.docs.map(doc => doc.data()))
        } 

    fetchEvents()
    }, [input])

   return (
    <>
     <div className="searchbar"> 
     <SearchField
        placeholder="Search for events or friends..."
        onEnter= {(event, value) => setInput(event)}
        //event => setInput(event.target.value)
        searchText=""
        classNames="test-class"
        />
         <div> 
            <ul className="searchlist">
              {events.map(event => (
                <li>{event.eventName} : {event.description}
                  <Button onClick={() => onEventSelected(event)}>Details</Button>
                </li>
	  		    ))}
	  		</ul>
        </div>
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

 export default Search;