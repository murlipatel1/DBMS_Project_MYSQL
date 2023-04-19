import React from 'react'
import './student.css'
const Studentdetail = (props) => {
    const {videos} = props
  return (
    <>
    <ul>
    {/* <div>Studentdetail</div> */}
    <li>{videos.sid}</li>
    <li>{videos.sname}</li>
    <li>{videos.sem}</li>
    <li>{videos.branch}</li>
    <li>{videos.s_email}</li>
    <li>{videos.s_pwd}</li>
    </ul>
    </>
    
  )
}

export default Studentdetail