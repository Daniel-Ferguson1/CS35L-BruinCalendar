import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Users from "./Users"
import firebase from 'firebase/app'
import 'firebase/firestore';
import { BiExitFullscreen } from 'react-icons/bi';
import AddFriendEvent from './AddFriendEvent';



class FriendProfile extends React.Component {
    constructor() {
      super()
      const events = [];
      this.state = {
        eventsPersonal: [],
        eventsJoint: [],
        book: false
      }
    }

  async getEvents(uid, currentUser) {
    let db = firebase.firestore();
    let data = await db.collection('events').where('userId', '==', uid).get()
    let data3 = await db.collection('events').where('userId', '==', uid).get()
    .then((queryDocumentSnapshot) => {
      queryDocumentSnapshot.forEach((doc) => {
        //console.log(doc.id)
        //setUsers(doc.get('friends'));
      })
    })
    let data2 = await db.collection('events').where('guest', '==', uid).get()
    let singleEvents = [];
    let jointEvents = [];
    for (let item of data2.docs){
      let event = item.data()
      //console.log(event)
      if(event.userId == currentUser.email){
        jointEvents.push(event)
      }
    }
    for (let item of data.docs){
      let event = item.data()
      if(event.jointEvent && event.guest == currentUser.email){
        jointEvents.push(event)
      }
      else if(!event.jointEvent){
        singleEvents.push(event)
      }
    }
    this.setState({
      eventsPersonal: singleEvents,
      eventsJoint: jointEvents,
    });
  }
  
  render(){
        const { stateData } = this.props.location
        let uid = stateData.user
        let currentUser = stateData.currentUser
        //console.log(currentUser)
        this.getEvents(uid, currentUser);
        let returnView1;
        let returnView2;

        if(this.state.eventsPersonal.length == 0){
          returnView1 =  <p>No events to display</p>
        }
        else{
          returnView1 = this.state.eventsPersonal.map((event) =>
            {
              //console.log(event.uid)
              return <li>{event.id}</li>
            })
        }

        if(this.state.eventsJoint.length == 0){
          returnView2 =  <p>No events to display</p>
        }
        else{
          returnView2 = this.state.eventsJoint.map((event) =>
            {
              return <li>{event.eventName}</li>
            })
        }
      return (
        <>
            <h2><strong>User: </strong> {uid}</h2>
            <div>
              <strong>User's Personal Events</strong>
              <ul>
                {returnView1}
              </ul>
            </div>
            <div>
              <strong>Joint Events</strong>
              <ul>
                {returnView2}
              </ul>
            </div>
            <div>
              <Link to={{
                pathname: "/bookTime",
                friendId: uid // your data array of objects
                }}>
                <Button>Book Time With This Friend!</Button>
              </Link>
            </div>
        </>
      )
  }
}
//<Button onClick={() => setListType('All')}>All Users</Button>

export default FriendProfile;