import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const {login} = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault()
		try{
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/")
		}
		catch{
			setError('Failed to sign in');
		}
		setLoading(false);
	}

	return ( 
		<div className="login">
			<div class="loginHeader">Log In</div>
			<div class="loginBody">
				{error && <Alert variant="danger">{error}</Alert>}
				<Form id="entry" onSubmit={handleSubmit}>
				<Form.Group id="email">
					<Form.Label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
					<Form.Control className="field" type="email" ref={emailRef} required />
				</Form.Group>
				<Form.Group id="password">
						<Form.Label>Password:&nbsp;&nbsp;</Form.Label>
						<Form.Control className="field" type="password" ref={passwordRef} required />
				</Form.Group>
					<Button className="loginButton" disabled={loading} type="submit">Log In</Button>
				</Form>
				Need an account? <Link to="/signup"><Button className="loginButton">Sign Up</Button></Link>
			</div>
		</div>

	);
}