import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function Dashboard() {
	const [error, setError] = useState('') 
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
    return (
	  	<>
	  		<h2>Profile</h2>
	  		{error && <Alert variant="danger">{error}</Alert>}
	  		<strong>Email: </strong> {currentUser.email}
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