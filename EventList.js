import React, {useRef, useState, useEffect} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Users from "./Users"
import firebase from 'firebase/app'
import 'firebase/firestore';
import Sidebar from '../feature/Sidebar';
import Header from './Header';
import './EventList.css'



export const EventList = ({
  dateClicked: day,
  dateFormatted: dateFormatted,
}) => {
  const { currentUser } = useAuth()
  const db = firebase.firestore()
  const [events, setEvents] = useState([])

  useEffect(() => {
		const fetchEvents = async () => {
			const data = await db.collection("events").where('date', '==', day).get()
      let usersEvents = [];
      for (let item of data.docs){
        let event = item.data()
        //console.log(event)
        if(event.userId == currentUser.email || event.guest == currentUser.email){
          usersEvents.push(event)
        }
      }
			setEvents(usersEvents)

		}
		fetchEvents()
	}, [dateFormatted])

  let returnView;
  if(events.length == 0){
    returnView =  <p className="listview">No events to display</p>
  }
  else{
    returnView = events.map((event) =>
      {
        return <div>
          <script defer src="EventOpener.js"></script>
            <li className="listview">{event.time} - 
            <button open="#event" class="showevent">{event.eventName}</button></li>
            <div class="event" id="event">
              <div class="event_header">
                <div class="event_name">
                  {event.eventName} will start at {event.time} on {event.date}
                </div>
                <button close class="close">X</button>
              </div>
              <div class="event_desc">
                <p class="desc">Event Description</p> 
                {event.description} <p></p>
                <p class="desc">Comments</p> 
                <ul>
                  <li>{event.commentList}</li>
                </ul>
              </div>
            </div>
            <div id="background"></div>
          </div>
      })
  }

    return (
	  	<>
	  		<h2>Events on { dateFormatted } </h2>
        <ul>
            {returnView}
        </ul>
	  	</>
  	);
}
export default EventList;


// import React from 'react'
// import Event from "./Event"
// import { Container, Button } from 'react-bootstrap'
// import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

// class Eventlist extends React.Component {
//   state = {
//     modalIsOpen: false,
//   }

//   toggleModal() {
//     this.setState({
//       modalIsOpen: ! this.state.modalIsOpen,
//     });
//   }

//   render() {
//     return (
//       <Container>
//         <h2>Event list</h2>
//         <Button 
//         color="primary" 
//         size="sm" 
//         onClick={this.toggleModal.bind(this)}>
//           Add Event
//         </Button>
//         <Modal isOpen={this.state.modalIsOpen}>
//           <ModalHeader toggle={this.toggleModal.bind(this)}>Create Event</ModalHeader>
//           <ModalBody>Modal Body</ModalBody>
//           <ModalFooter>
//             <Button color="primary">Save</Button>
//             <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>        
//           </ModalFooter>
//         </Modal>
//         <Event />
//       </Container>
//     )
//   }
// }

// export default Eventlist;

/* https://youtu.be/qPF_7wl_sYI Modal and button */

// ===============================================================================================

// import {Container, Button, Modal, Row, Col} from 'react-bootstrap'
// import React from 'react'
// import Event from "./Event"
// import './Eventlist.cimport 'bootstrap/dist/css/bootstrap.min.css'
// 
// class Eventlist extends React.Component {
// constructor() {    // super()
    // this.state=  // show:false,
    // }
  // }
  // handleModal(){
  // this.setState({show:true})
// 
  // }
  // render(){
    // return (
      // <Container className="Eventlis        {/* <Row id="Elist"> */}
          // <h1>Event list</h1>
        // </Row>
        // <Row id="Button">
          {/* <Button onClick={() => {this.handleModal()}}>Add Event</Button> */}
          {/* <Modal show={this.state.show}> */}
            {/* <Modal.Header>Header</Modal.Header> */}
            {/* <Modal.Body>body</Modal.Body> */}
            {/* <Modal.Footer> */}
              {/* <Button color="primary">Save</Button> */}
              {/* <Button color="secondary">Cancel</Button>               */}
            {/* </Modal.Footer> */}
          {/* </Modal> */}
        {/* </Row> */}
        // <Row>
          {/* <Event /> */}
        {/* </Row> */}
      // </Container>
    // )
  // }
// }
// export default Eventlist; 

