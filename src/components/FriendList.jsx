import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Users from "./Users"
import firebase from 'firebase/app'
import 'firebase/firestore';

function FriendList() {
	const [error, setError] = useState('') 
	const [events, setEvents] = useState([]) 
	const history = useHistory()
    const [listType, setListType] = useState('All')
    const [active, setActive] = useState(false)
	const [users, setUsers] = useState([]) 
	const { currentUser } = useAuth()
    const db = firebase.firestore()
    //const admin = require('firebase-admin');

	async function addFriend(e,item){
        
        console.log(item.email);
        //const theUser = await db.collection("users").where('email', '==', currentUser.email).get()
        const theUser = db.collection('users').doc(item.email);

        const unionRes = await theUser.update({
            friends: firebase.firestore.FieldValue.arrayUnion(item.email)
          });
    }

	useEffect(() => {
		const fetchUsers = async () => {

			if (listType == 'Friends')
			{
				const data = await db.collection("users").where('email', '==', currentUser.email)
				.get()
				.then((queryDocumentSnapshot) => {
					queryDocumentSnapshot.forEach((doc) => {
						setUsers(doc.get('friends'));
					})
				})
			}
			else
			{
				const data = await db.collection("users").get()
				setUsers(data.docs.map(doc => doc.data()))
			}
		}
		fetchUsers()
	}, [listType])

    let button;
    let message = ''
    if (listType == 'Friends') {
        message = 'View Profile'
        button = <Button >View Profile</Button>;
    } 
    else {
        message = 'Add Friend'
        button = <Button onClick={addFriend}>Add Friend</Button>;
    }

    return (
	  	<>
	  		<h2>Users</h2>
	  		<div>
	  			<Button onClick={() => setListType('All')}>All Users</Button>
                <Button onClick={() => setListType('Friends')}>My Friends</Button>
	  		</div>
			<div> 
	  			<strong>{listType}: </strong> 
	  			<ul>
	  				{users.map(user => {
                        //if(!active){
                            //message = 'Friend Request Sent'
                        //}
	  					return <li>{user.email} <Button onClick={e => addFriend(e,user)}>{message}</Button> </li>
                      })}
	  			</ul>
			</div>
	  	</>
  	);
}
export default FriendList;