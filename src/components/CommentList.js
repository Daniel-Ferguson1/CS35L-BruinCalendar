import React, { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore';

// need to implement this into the event detail modal
// need to get user's name corresponding to the comment.userId
export const CommentList = ({eventId: eventId}) => {
  const db = firebase.firestore()
  const [comments, setComments] = useState([])

  useEffect(() => {
		const fetchComments = async () => {
			const data = await db.collection("comments").where('eventId', '==', eventId).get()
      let commentForEvent = [];
      for (let item of data.docs){
        commentForEvent.push(item.data())
        }
        setComments(commentForEvent)
      }
    fetchComments()
	}, []) // call this whenever this component is invoked
  
  
  return (
    <div>
      <h2>Comments</h2>
      <ul>
      {comments.length > 0
        ? comments.map((comment) =>
        {
          return (
            <>
              <h3>{comment.email}</h3>
              <li>Comment : {comment.comments}</li>
            </>
          )
        })
        : <p>No comments to this event</p>
      }
      </ul>
    </div>
  )
}

export default CommentList;