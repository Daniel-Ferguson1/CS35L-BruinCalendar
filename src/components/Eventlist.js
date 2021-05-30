import React from 'react'
import {Container, Button, Modal, Row, Col} from 'react-bootstrap'
import Event from "./Event"
import './Eventlist.css'
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
      <Container className="Eventlist">
        <Row id="Elist">
          <h1>Event list</h1>
        </Row>
        <Row id="Button">
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