import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Users from "./Users"
import firebase from 'firebase/app'
import 'firebase/firestore';
import Sidebar from '../feature/Sidebar';
import Header from './Header';
import './FriendList.css'

function FriendList() {
	const [error, setError] = useState('') 
	const [friends, setFriends] = useState([]) 
	const history = useHistory()
    const [listType, setListType] = useState('Friends')
    const [active, setActive] = useState(false)
	const [users, setUsers] = useState([]) 
	const { currentUser } = useAuth()
    const db = firebase.firestore()
    //const admin = require('firebase-admin');

	async function addFriend(e,item){
        //const theUser = await db.collection("users").where('email', '==', currentUser.email).get()
        const theUser = db.collection('users').doc(currentUser.email);

        const unionRes = await theUser.update({
            friends: firebase.firestore.FieldValue.arrayUnion(item.email)
          });
    }

	useEffect(() => {
		const fetchUsers = async () => {

			if (listType == 'Friends')
			{
				const data = await db.collection("users").doc(currentUser.email).get()
                var theFriends = data.get("friends");
                setUsers(theFriends);
                setFriends(theFriends);

			}
			else
			{
				const data = await db.collection("users").get()
				setUsers(data.docs.map(doc => doc.data()))
			}
		}
		fetchUsers()
	}, [listType])

    let message = ''
    let listLine; 
    if (listType == 'Friends') {
        listLine = friends.map(user => {
            return <li>{user} 
            <Link to={{
              pathname: "/friendProfile",
              stateData: {user,currentUser} // your data array of objects
              }}>
              <Button>View Profile</Button>
            </Link> </li>
        })  
    } 
    else {
        listLine = users.map(user => {
            if(user.email == currentUser.email){
                return
            }
            if(friends.includes(user.email)){
                return
            }
              return <li>{user.email} <Button onClick={e => addFriend(e,user)}>Add Friend</Button> </li>
          })
    }

    return (
	  	<>
        <div>
            <Sidebar />
            <Header />
		</div>
        <div className="FriendList">
	  		<h2>Friends</h2>
            <strong>Email: </strong> {currentUser.email}
	  		<div>
	  			<Button onClick={() => setListType('All')}>All Users</Button>
                <Button onClick={() => setListType('Friends')}>My Friends</Button>
	  		</div>
			<div> 
	  			<strong>{listType}: </strong> 
	  			<ul>
                    {listLine}
	  			</ul>
			</div>
        </div>
	  	</>
  	);
}
export default FriendList;