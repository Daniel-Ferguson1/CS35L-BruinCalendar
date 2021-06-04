import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Users from "./Users"
import firebase from 'firebase/app'
import 'firebase/firestore';
import Sidebar from '../feature/Sidebar';
import Header from './Header';
import './Header.css'
import './Dashboard.css'

function Dashboard() {
	const [error, setError] = useState('') 
	const [events, setEvents] = useState([]) 
	const { currentUser, logout } = useAuth()
	const history = useHistory()

	async function handleLogout(){
		console.log('heyyh')
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
			const data = await db.collection("events").where('description', 'array-contains-any',
			['this', 'Bar']).get() //instead of ['this', 'Bar'], 
			setEvents(data.docs.map(doc => doc.data()))
		}
		fetchEvents()
	}, [])
    return (
	  	<>
		<div>
          <Sidebar />
          <Header />
		</div>

		<div className="Header">
	  		<h1>Profile</h1>
	  		{error && <Alert variant="danger">{error}</Alert>}
	  		<strong>Email: </strong> {currentUser.email}
	  		<ul>
	  			{events.map(event => (
	  				<li>{event.eventName}</li>
	  			))}
	  		</ul>
			<div>
	  			<Link to="/addEvent"><button className="profileWatch">Add Event</button></Link>
	  		</div>
		</div>
	  	</>
  	);
}
export default Dashboard;