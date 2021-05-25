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
      <Table striped bordered hover>
        {/* <thread>
          Event list
        </thread> */}
        <tbody>
          { testData.map(renderData) }
        </tbody>
      </Table>
    </div>
  )
}

export default Event;

/* https://youtu.be/nV7Mf77GiOc */
/*https://youtu.be/LyLa7dU5tp8 modal for popping up to create a new event*/

// import React from 'react'
// import { BootstrapTable } from 'react-bootstrap-table-next'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


// const testData =[
//   { title: "CS35L Final Exam", time: "2:00PM", desc:"Egggert" },
//   { title: "Another final exam", time: "6:00PM", desc: "Shiiiiit"},
// ]

// const columns =[{
//   dataField: 'title',
//   text: 'Title'
// },{
//   dataField: 'time',
//   text: 'Time'
// },{
//   dataField: 'desc',
//   text: 'Description'
// }]

// const Event = () => {
//   return (
//     <div>
//       <BootstrapTable keyField='title' data={ testData } columns={ columns }/>
//     </div>
//   )
// }

// export default Event;
