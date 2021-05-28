import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';

function FriendList() {
	const [error, setError] = useState('') 
    const [listType, setListType] = useState('All')
    const [active, setActive] = useState(false)
	const [users, setUsers] = useState([]) 
	const { currentUser, logout } = useAuth()
	const history = useHistory()

    async function addFriend(){
        //condition checking to change state from true to false and vice versa
        console.log('hey')
        //console.log(item.email)
    }

    async function addFriend2(){
        //condition checking to change state from true to false and vice versa
        //console.log('hey')
        //console.log(item.email)
    }

	useEffect(() => {
		const fetchUsers = async () => {

			const db = firebase.firestore()
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
        button = <Button onClick={addFriend2}>Add Friend</Button>;
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
	  					return <li>{user.email} button = <Button onClick={addFriend()}>{message}</Button> </li>
                      })}
	  			</ul>
			</div>

	  	</>
  	);
}

export default FriendList;