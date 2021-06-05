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
	const {currentUser} = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		try{
			setError("");
			setLoading(true);
			const db = firebase.firestore()
			let date = dateRef.current.value
			let time = timeRef.current.value
			let name = nameRef.current.value
			let desc = descriptionRef.current.value
			let nameArray = name.split(' ')
			nameArray = nameArray.filter((item) => item != '');
			let descArray = desc.split(' ')
			descArray = descArray.filter((item) => item != '');
			let searchArray = nameArray.concat(descArray)
            
			const data = {
				date: date,
				time: time,
				userId: currentUser.email,
				eventName: name,
				description: desc,
				searchValues: searchArray,
				jointEvent: false,
				guest: '',
			};
			let collectionRef = db.collection('events');
			let theID = 0;
			await collectionRef.add(data).then(documentReference => {
				theID = documentReference.id
			});
			const cityRef = db.collection('events').doc(theID);

			const res = await cityRef.set({
				eventId: theID
			}, { merge: true });
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
		  <Form.Group className="dateForm">
		  	<Form.Label>Date: </Form.Label>
		  	<Form.Control class="addEventInput" type="date" ref={dateRef} required />
		  </Form.Group>

          <Form.Group className="timeForm">
		  	<Form.Label>Time: </Form.Label>
		  	<Form.Control class="addEventInput" type="time" ref={timeRef} required />
		  </Form.Group>

		  <Form.Group className="eventForm">
		  		<Form.Label>Event Name: </Form.Label>
		  		<Form.Control class="addEventInput" ref={nameRef} required />
		  </Form.Group>

		    <Form.Group className="eventForm">
		  		<Form.Label>Event Description: </Form.Label>
		  		<Form.Control class="addEventInput" ref={descriptionRef} />
		  	</Form.Group>

		  	<Button className="eventButton" disabled={loading} type="submit">Add Event</Button>
		</Form>
		<div className="Cancellation">
			No longer need to schedule an event? <Link to="/">Cancel</Link>
		</div>
	  </div> 
	  
	  </>

	);
}