import { app } from '../firebase.js';

import React, { useState, useEffect } from "react";
import './Search.css'
import SearchField from "react-search-field";
import firebase from 'firebase/app'
import 'firebase/firestore';

 

 const choices = [
   { key: "choice1", description: "Event Search" },
   { key: "choice2", description: "Friend Search" },
 ];
/*
    <SearchPanel id="panel"
           choices={choices}
           onChange={event => setInput(event.target.value)}
           onSelectionChange={setSelectedChoices}
           placeholder="Search"
           selectedChoices={selectedChoices}
           value={input}
         />
         */

 const Search = () => {
   const [input, setInput] = React.useState("");
   const [selectedChoices, setSelectedChoices] = useState(choices);

    const [events, setEvents] = useState([])

    useEffect(() => {
        const searchVars = input.split(' ')
        const fetchEvents = async () => {
        const db = firebase.firestore()
        const data = await db.collection("events").where('searchValues', 'array-contains-any',
        searchVars).get()
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
            <ul>
	  			{events.map(event => (
	  			    <li>{event.eventName} : {event.description}</li>
	  		    ))}
	  		</ul>
        </div>
     </div>
     </>
   );
 }

 export default Search;