import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';

export default function AddComment() {
	
	const commentRef = useRef();
	const [error, setError] = useState('')
	const {currentUser} = useAuth()
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleComments(str) {
		str.preventDefault()
		try{
			setError("");
			setLoading(true);
			const db = firebase.firestore()
            let comment = commentRef.current.value
			let commentArray = comment.split('LISTBREAK')

			const data = {
                comments: commentArray,
				userId: currentUser.uid
			  };
			const res = await db.collection('comments').doc().set(data);
			history.push("/")
		}
		catch(err){
			console.log(err)
			setError("Failed to add comment");
		}
		setLoading(false);
	}

	return ( 
	  <div>
		 {error && <Alert variant="danger">{error}</Alert>}
		 <Form onSubmit={handleComments}>

		    <Form.Group id="comment">
		  		<Form.Label>Add Comment: </Form.Label> <br></br>
		  		<Form.Control ref={commentRef} />
		  	</Form.Group>
			  
		  	<Button disabled={loading} type="submit" id="button">Submit</Button>
		</Form>

	  </div> 
	);
}