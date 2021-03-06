import React, {useRef, useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import firebase from 'firebase/app'
import 'firebase/firestore';
import './AddComment.css'

export const AddComment = ({ eventId, onSubmitComment }) => {
	const commentRef = useRef();
	const [error, setError] = useState('')
	const {currentUser} = useAuth()
	const [loading, setLoading] = useState(false)

	async function handleComments(str) {
		str.preventDefault()
		try{
			setError("");
			setLoading(true);
			const db = firebase.firestore()
			let comment = commentRef.current.value

			const data = {
				text: comment,
				email: currentUser.email,
				eventId: eventId,
			};
			await db.collection('comments').doc().set(data);
		}
		catch(err){
			console.log(err)
			setError("Failed to add comment");
		}
		setLoading(false);
		onSubmitComment();
	}

	return ( 
	<div className="body">
		{error && <Alert variant="danger">{error}</Alert>}
		<Form onSubmit={handleComments}>
			<Form.Group id="addComment">
				<Form.Label>Add Comment: </Form.Label> <br></br>
				<Form.Control ref={commentRef} /> &nbsp;
			</Form.Group>
			<Button disabled={loading} type="submit" id="button" >Submit</Button>
		</Form>
	</div> 
	);
}

export default AddComment;