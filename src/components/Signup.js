import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const {signup} = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault()
		if(passwordRef.current.value !== passwordConfirmRef.current.value){
			return setError("Passwords do not match");
		}
		try{
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			//console.log('hey')
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