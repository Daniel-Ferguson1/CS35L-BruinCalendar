import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';

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
		<>
	  <div>
		 <h2>Sign Up</h2>
		 {error && <Alert variant="danger">{error}</Alert>}
		 <Form onSubmit={handleSubmit}>
		 <Form.Group>
		  		<Form.Label>Username</Form.Label>
		  		<Form.Control ref={userRef} required />
		  </Form.Group>
		  <Form.Group>
		  		<Form.Label>School</Form.Label>
		  		<Form.Control ref={schoolRef} />
		  </Form.Group>
		  <Form.Group id="email">
		  	<Form.Label>Email</Form.Label>
		  	<Form.Control type="email" ref={emailRef} required />
		  </Form.Group>
		  <Form.Group id="password">
		  		<Form.Label>Password</Form.Label>
		  		<Form.Control type="password" ref={passwordRef} required />
		  </Form.Group>
		  	<Form.Group id="password-confirm">
		  		<Form.Label>Password Confirmation</Form.Label>
		  		<Form.Control type="password" ref={passwordConfirmRef} required />
		  	</Form.Group>
		  	<Button disabled={loading} type="submit">Sign Up</Button>
		</Form>
	  </div> 
	  <div>
	  	Already have an account? <Link to="/login">Log In </Link>
	  </div>
	  </>

	);
}

//export default Signup;