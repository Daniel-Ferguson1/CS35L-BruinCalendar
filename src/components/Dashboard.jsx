import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';

function Dashboard() {
	const [error, setError] = useState('') 
	const [events, setEvents] = useState([]) 
	const { currentUser, logout } = useAuth()
	const history = useHistory()

	async function handleLogout(){
		setError("");
		try{
			await logout();
			//console.log('hey')
			history.push("/login")
		}
		catch{
			//console.log(err)
			setError("Failed to log out");
		}
	}

	useEffect(() => {
		const fetchEvents = async () => {
			const db = firebase.firestore()
			const data = await db.collection("events").get()
			setEvents(data.docs.map(doc => doc.data()))
		}
		fetchEvents()
	}, [])

    return (
	  	<>
	  		<h2>Profile</h2>
	  		{error && <Alert variant="danger">{error}</Alert>}
	  		<strong>Email: </strong> {currentUser.email}
	  		<ul>
	  			{events.map(event => (
	  				<li>{event.eventName}</li>
	  			))}
	  		</ul>
	  		<div>
	  			<Link to="/update-profile">Update Profile</Link>
	  		</div>
	  		<div>
	  			<Button variant="link" onClick={handleLogout}>Log Out</Button>
	  		</div>
	  	</>
  	);
}
export default Dashboard;