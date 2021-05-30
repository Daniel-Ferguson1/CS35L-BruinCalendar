import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Users from "./Users"
import firebase from 'firebase/app'
import 'firebase/firestore';



class FriendProfile extends React.Component {
    constructor() {
      super()
      const events = [];
      this.state = {
        events
      }
    }

  async getEvents(uid) {
    let db = firebase.firestore();
    let data = await db.collection('events').where('userId', '==', uid).get()
    this.setState({
      events: (data.docs.map(doc => doc.data()))
    });
  }
    
  render(){
        const { uid } = this.props.location
        this.getEvents(uid);
      return (
        <>
            <h2><strong>Email: </strong> {uid}</h2>
            <div>
              <ul>
               {this.state.events.map((event) =>
                {
                  return <li>{event.eventName}</li>
                })}
              </ul>
            </div>
        </>
      )
  }
}

export default FriendProfile;