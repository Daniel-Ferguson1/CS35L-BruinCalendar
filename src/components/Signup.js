import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';
import './Signup.css'

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const userRef = useRef();
	const schoolRef = useRef();
	const passwordConfirmRef = useRef();
	const {signup} = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault()
		const db = firebase.firestore()
		if(passwordRef.current.value !== passwordConfirmRef.current.value){
			return setError("Passwords do not match");
		}
		const data = {
			email: emailRef.current.value,
			userName: userRef.current.value,
			school: schoolRef.current.value,
			friends: []
		  };
		await db.collection('users').doc(emailRef.current.value).set(data);
		try{
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value)
			history.push("/")
		}
		catch(err){
			console.log(err)
			setError("Failed to create an account");
		}
		
		setLoading(false);
	}

	return ( 
	  <div className="signup">
		<div class="signupHeader">Sign Up</div>
		<div class="signupBody">
			{error && <Alert variant="danger">{error}</Alert>}
			<Form id="entry" onSubmit={handleSubmit}>
			<Form.Group>
					<Form.Label>Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;
					</Form.Label>
					<Form.Control className="field" ref={userRef} required />
			</Form.Group>
			<Form.Group>
					<Form.Label>School: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</Form.Label>
					<Form.Control className="field" ref={schoolRef} />
			</Form.Group>
			<Form.Group id="email">
				<Form.Label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</Form.Label>
				<Form.Control className="field" type="email" ref={emailRef} required />
			</Form.Group>
			<Form.Group id="password">
					<Form.Label>Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;
					</Form.Label>
					<Form.Control className="field" type="password" ref={passwordRef} required />
			</Form.Group>
				<Form.Group id="password-confirm">
					<Form.Label>Confirm Password: </Form.Label>
					<Form.Control className="field" type="password" ref={passwordConfirmRef} required />
				</Form.Group>
				<Button className="signupButton" disabled={loading} type="submit">Sign Up</Button>
			</Form>
	  		Already have an account? <Link to="/login"><Button className="signupButton">Log In</Button></Link>
	  	</div>
	  </div>
	);
}

//export default Signup;