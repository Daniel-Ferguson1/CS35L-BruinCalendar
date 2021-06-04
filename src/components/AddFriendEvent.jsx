import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory,useLocation} from 'react-router-dom'
import firebase from 'firebase/app'
import Sidebar from '../feature/Sidebar';
import Header from './Header';
import './AddEvent.css'

import 'firebase/firestore';

export default function AddFriendEvent() {
	const dateRef = useRef();
	const timeRef = useRef();
	const nameRef = useRef();
	const descriptionRef = useRef();
	const {currentUser} = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()
	const { friendId } = useLocation();

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
			let nameArray = name.split(' ')
			console.log(nameArray)
			let descArray = desc.split(' ')
			let searchArray = nameArray.concat(descArray)
            
			const data = {
				date: date,
				time: time,
				userId: currentUser.email,
				eventName: name,
				description: desc,
				searchValues: searchArray,
				jointEvent: true,
				guest: friendId,
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
			history.push("/FriendList")
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
		 <h2>Book Time with {friendId}</h2>
		 {error && <Alert variant="danger">{error}</Alert>}
		 <Form onSubmit={handleSubmit}>
		  <Form.Group className="eventForm">
		  	<Form.Label>Date: </Form.Label>
		  	<Form.Control class="addEventInput" type="date" ref={dateRef} required />
		  </Form.Group>

          <Form.Group className="eventForm">
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
=======
			<h2>Book Time with {friendId}</h2>
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
			<Button className="friendButton" disabled={loading} type="submit">Add Event</Button>
>>>>>>> 4309e924a2dc431abf737874ed198e450e6a38f5
		</Form>
		</div> 
		<div className="addEvent">
			No longer want to book time together? <Link to="/FriendList">Cancel </Link>
		</div>
	</>
	);
}