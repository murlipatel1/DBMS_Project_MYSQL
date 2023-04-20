import React from 'react'
import './student.css'
const Studentdetail = (props) => {
    const {student} = props
  return (
    <>
    <ul>
    {/* <div>Studentdetail</div> */}
    <li>{student.sid}</li>
    <li>{student.sname}</li>
    <li>{student.sem}</li>
    <li>{student.branch}</li>
    <li>{student.s_email}</li>
    </ul>
    </>
    
  )
}

export default Studentdetail