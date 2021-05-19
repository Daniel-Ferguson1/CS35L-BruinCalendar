import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';

function Users() {
	const [error, setError] = useState('') 
    const [listType, setListType] = useState('All')
	const [users, setUsers] = useState([]) 
	const { currentUser, logout } = useAuth()
	const history = useHistory()

	useEffect(() => {
		const fetchUsers = async () => {
			const db = firebase.firestore()
			const data = await db.collection("users").get()
			setUsers(data.docs.map(doc => doc.data()))
		}
		fetchUsers()
	}, [listType])

    return (
	  	<>
	  		<h2>Users</h2>
	  		<div>
	  			<Button onClick={() => setListType('All')}>All Users</Button>
                <Button onClick={() => setListType('Friends')}>My Friends</Button>
	  		</div>
	  		<strong>{listType}: </strong> 
	  		<ul>
	  			{users.map(user => (
	  				<li>{user.email}</li>
	  			))}
	  		</ul>
	  	</>
  	);
}
export default Users;