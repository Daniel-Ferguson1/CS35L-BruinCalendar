import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import styled from 'styled-components';
import 'firebase/firestore';
import './CommentList.css'


const DetailCell = styled.td` 
  padding: 4px;
`

const LeftData = styled(DetailCell)`
font-weight: bold;
width: 50%;
`;

const RightData = styled(DetailCell)``;

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
	}, [])
  
  return (
    <div>
      <p class="item">Comments: </p>
      <ul class="commentList">
      {comments.length > 0
        ? comments.map((comment) =>
        {
          return (
              <tbody>
                <tr>
                  <li>
                    <LeftData class="user">{comment.email}</LeftData>
                    <RightData class="comment">{comment.text}</RightData>
                  </li>
                </tr>
              </tbody>
          )
        })
        : <p>No comments to this event</p>
      }
      </ul>
    </div>
  )
}

export default CommentList;