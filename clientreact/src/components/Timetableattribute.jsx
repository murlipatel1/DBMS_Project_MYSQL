import React,{useState} from 'react'
import './Timetableattribute.css'
const Timetableattribute = (props) => {
  const [searchValue, setSearchValue] = useState('');
    const {videos} = props
  //   const filteredVideos = videos.filter((video) =>
  //   video.room_no.toLowerCase().includes(searchValue.toLowerCase())
  // );
  return (
    <>
    <ul className='container' style={{marginLeft:"90px"}}>
    <li>{videos.Sno}</li>
    <li>{videos.room_no}</li>
    <li>{videos.sem}</li>
    <li >{videos.branch}</li>
    <li style={{marginLeft:"20px"}}>{videos.course_name}</li>
    <li>{videos.fid}</li>
    <li>{videos.day}</li>
    <li>{videos.time}</li>
    {/* {filteredVideos.map((video) => (
          <li key={video.Sno}>
            {video.Sno} | {video.room_no} | {video.sem} | {video.branch} |{' '}
            {video.course_name} | {video.fid} | {video.day} | {video.time}
          </li>
        ))} */}
    </ul>

    </>
    
  )
}

export default Timetableattribute