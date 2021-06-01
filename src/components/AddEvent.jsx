import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import Sidebar from '../feature/Sidebar';
import Header from './Header';
import './AddEvent.css'

import 'firebase/firestore';

export default function AddEvent() {
	const dateRef = useRef();
	const timeRef = useRef();
	const nameRef = useRef();
    const descriptionRef = useRef();
	const commentRef = useRef();
	const {currentUser} = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

    //dateTime "2022-04-10 13:00"
    //description "This is such and such."
    //eventName "Quinceañera"
    //eventid "12312"
    //schoolness 1
    //urgency 1
    //userId: "uwjGvRH7OPUrKb0uXgY53xZdGUK2"

	async function handleSubmit(e) {
		e.preventDefault()
		try{
			setError("");
			setLoading(true);
			const db = firebase.firestore()
            let date = dateRef.current.value
            let time = timeRef.current.value
            let name = nameRef.current.value
            let desc = descriptionRef.current.value
			let comment = commentRef.current.value
            let nameArray = name.split(' ')
			//console.log(nameArray)
            let descArray = desc.split(' ')
            let searchArray = nameArray.concat(descArray)
            
			const data = {
				dateTime: date.concat(' ').concat(time),
				userId: currentUser.email,
				eventName: name,
                description: desc,
				commentList: comment,
				searchValues: searchArray,
				jointEvent: false,
				guest: '',

			  };
			let collectionRef = db.collection('events');
			let theID = 0;
			await collectionRef.add(data).then(documentReference => {
				theID = documentReference.id
				//console.log(`Added document with name '${documentReference.id}'`);
			});
			//const res = await db.collection('events').doc().set(data);
			const cityRef = db.collection('events').doc(theID);

			const res = await cityRef.set({
  				eventId: theID
			}, { merge: true });
			//console.log(theID)
			history.push("/")
		}
		catch(err){
			console.log(err)
			setError("Failed to add event");
		}
		setLoading(false);
	}

	return ( 
		<>
	  	<div>
          <Sidebar />
          <Header />
		</div>

		<div className="addEvent">
		 <h2>Create Event</h2>
		 {error && <Alert variant="danger">{error}</Alert>}
		 <Form onSubmit={handleSubmit}>
		  <Form.Group id="date">
		  	<Form.Label>Date: </Form.Label>
		  	<Form.Control type="date" ref={dateRef} required />
		  </Form.Group>

          <Form.Group id="time">
		  	<Form.Label>Time: </Form.Label>
		  	<Form.Control type="time" ref={timeRef} required />
		  </Form.Group>

		  <Form.Group id="name">
		  		<Form.Label>Event Name: </Form.Label>
		  		<Form.Control ref={nameRef} required />
		  </Form.Group>

		    <Form.Group id="description">
		  		<Form.Label>Event Description: </Form.Label>
		  		<Form.Control ref={descriptionRef} />
		  	</Form.Group>

			  <Form.Group id="comment">
		  		<Form.Label>Comments: </Form.Label>
		  		<Form.Control ref={commentRef} required />
		  </Form.Group>

		  	<Button disabled={loading} type="submit">Add Event: </Button>
		</Form>
	  </div> 
	  
	  <div className="addEvent">
	  	No longer need to schedule an event? <Link to="/">Cancel </Link>
	  </div>
	  </>

	);
}