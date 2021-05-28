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
        //console.log('woo')
        //console.log(data.docs)
        setEvents(data.docs.map(doc => doc.data()))
        } 

    fetchEvents()
    }, [input])
    
    function addComment(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }

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
	  			    <li> 
                {event.eventName} : {event.description} <br></br>
                <form onSubmit={addComment}>
                <button type="submit">Add Comment</button>
                </form>
              </li>
	  		    ))}
	  		</ul>
        </div>
     </div>
     </>
   );
 }

 export default Search;