import React from 'react'
import './Event.css'
import { Table } from 'react-bootstrap'

const Event = () => {
  const testData =[
    { title: "CS35L Final Exam", time: "2:00PM", desc:"Egggert" },
    { title: "Another final exam", time: "6:00PM", desc: "Shiiiiit"},
  ]

  const renderData = (data, index) => {
    return(
      <tr key={ index }>
        <td>{ data.title }</td>
        <td>{ data.time }</td>
        <td>{ data.desc }</td>
      </tr>
    )
  }
  
  return (
    <div className="Event">
      <Table striped bordered hover> {}
        <tbody>
          { testData.map(renderData) }
        </tbody>
      </Table>
    </div>
  )
}

export default Event;
