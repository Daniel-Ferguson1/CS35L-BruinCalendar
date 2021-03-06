import React, {useRef, useState, useEffect} from 'react';
import { Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';
import Sidebar from '../feature/Sidebar';
import Header from './Header';
import './Header.css'
import './Dashboard.css'

function Dashboard() {
	const [error, setError] = useState('') 
	const [users, setUsers] = useState([]) 
	const { currentUser } = useAuth()

	useEffect(() => {
		const fetchUsers = async () => {
			const db = firebase.firestore()
			const data = await db.collection("users").where('email', '==', currentUser.email).get() 
			setUsers(data.docs.map(doc => doc.data()))
		}
		fetchUsers()
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
			{users.map(user => (
					<>
				<p><strong>Username: </strong> {user.userName}</p>
				<p><strong>School: </strong> {user.school}</p>
					</>
	  				))}
	  		<p><strong>Email: </strong> {currentUser.email}</p>
	  		<div>
	  			<Link to="/addEvent"><button className="profileWatch">Add Event</button></Link>
	  		</div>
		</div>
	  	</>

  	);
}
export default Dashboard;