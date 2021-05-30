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
    }
    
    render(){
        const { uid } = this.props.location
      return (
        <>
            <h2><strong>Email: </strong> {uid}</h2>
        </>
      )
    }
  }

export default FriendProfile;