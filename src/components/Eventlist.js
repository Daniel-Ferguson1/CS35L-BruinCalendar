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


import React from 'react'
import {Container, Button, Modal, Row} from 'react-bootstrap'
import Event from "./Event"
//import 'bootstrap/dist/css/bootstrap.min.css'


class Eventlist extends React.Component {
  constructor() {
    super()
    this.state={
      show:false,
    }
  }

  handleModal(){
    this.setState({show:true})
  }

  render(){
    return (
      <Container>
        <Row>
          <h2>Event list</h2>
        </Row>
        <Row>
          <Button onClick={() => {this.handleModal()}}>Add Event</Button>
          <Modal show={this.state.show}>
            <Modal.Header>Header</Modal.Header>
            <Modal.Body>body</Modal.Body>
            <Modal.Footer>
              <Button color="primary">Save</Button>
              <Button color="secondary">Cancel</Button>
            </Modal.Footer>
          </Modal>
        </Row>
        <Row>
          <Event />
        </Row>
      </Container>
    )
  }
}

export default Eventlist;