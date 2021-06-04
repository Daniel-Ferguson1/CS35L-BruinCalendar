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
			let descArray = desc.split(' ')
			let searchArray = nameArray.concat(descArray)
            
			const data = {
				date: date,
				time: time,
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
<<<<<<< HEAD
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

			  <Form.Group className="eventForm">
		  		<Form.Label>Comments: </Form.Label>
		  		<Form.Control class="addEventInput" ref={commentRef} required />
		  </Form.Group>

		  	<Button className="eventButton" disabled={loading} type="submit">Add Event</Button>
		</Form>
		<div className="Cancellation">
			No longer need to schedule an event? <Link to="/">Cancel</Link>
		</div>
	  </div> 
	  
	  </>

=======
			<h2>Create Event</h2>
			{error && <Alert variant="danger">{error}</Alert>}
			<Form onSubmit={handleSubmit}>
				<Form.Group id="date">
					<Form.Label>Date: </Form.Label>
					<Form.Control class="addEventInput" type="date" ref={dateRef} required />
				</Form.Group>
		
				<Form.Group id="time">
					<Form.Label>Time: </Form.Label>
					<Form.Control class="addEventInput" type="time" ref={timeRef} required />
				</Form.Group>
		
				<Form.Group id="name">
					<Form.Label>Event Name: </Form.Label>
					<Form.Control class="addEventInput" ref={nameRef} required />
				</Form.Group>
		
				<Form.Group id="description">
					<Form.Label>Event Description: </Form.Label>
					<Form.Control class="addEventInput" ref={descriptionRef} />
				</Form.Group>
		
				<Form.Group id="comment">
					<Form.Label>Comments: </Form.Label>
					<Form.Control class="addEventInput" ref={commentRef} required />
				</Form.Group>
		
				<Button className="eventButton" disabled={loading} type="submit">Add Event</Button>
			</Form>
			<div className="Cancellation">
				No longer need to schedule an event? <Link to="/">Cancel</Link>
			</div>
	</div> 
	</>
>>>>>>> 4309e924a2dc431abf737874ed198e450e6a38f5
	);
}