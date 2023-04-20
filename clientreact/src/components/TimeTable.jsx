import React, { useState , useEffect,useContext} from 'react';
import './timetable.css';
import Timetableattribute from './Timetableattribute';
import noteContext from "../context/notes/noteContext";

const TimeTable = () => {
  const [filter, setFilter] = useState('');
  // const [roomNoFilter, setRoomNoFilter] = useState('');
 
const context = useContext(noteContext);
  const { video,getTimetable } = context;
  useEffect(() => {
    getTimetable();
  }, []);

  const filteredData = video.filter((row) =>
  {
    return (
      row.room_no.includes(filter) ||
      row.sem.includes(filter) ||
      row.branch.includes(filter) ||
      row.course_name.includes(filter) ||
      row.day.includes(filter) ||
      row.time.includes(filter) 
    );
  }
);

const handleFilterChange = (event) => {
  setFilter(event.target.value);
};

  return (
    <>
    
    <div className="table-container">
    {/* <input type="text" value={semFilter} onChange={(e) => setSemFilter(e.target.value)} placeholder="Search by Sem" />
        <input type="text" value={roomNoFilter} onChange={(e) => setRoomNoFilter(e.target.value)} placeholder="Search by Room No" /> */}
        <div className="search-container">
        <input
          type="text"
          placeholder="Search ..."
          value={filter}
          onChange={handleFilterChange}
        />
        </div>
    <table>
      <thead>
        <tr>
          <th>sno</th>
          <th>room</th>
          <th>sem</th>
          <th >branch</th>
          <th style={{marginLeft:"5px"}}>course</th>
          <th>fid</th>
          <th>day</th>
          <th>time</th>
        </tr>
      </thead>
      {/* <tbody>
        {students.map((student) => (
           <tr key={students.posts[0].sid}> 
            <td>{students.posts[0][0][0].sid}</td>
            <td>{students.posts[0][0][0].sname}</td>
            <td>{students.posts[0][0][0].sem}</td>
            <td>{students.posts[0][0][0].branch}</td>
            <td>{students.posts[0][0][0].s_email}</td>
            <td>{students.posts[0][0].s_pwd}</td>
          </tr> 
         ))} 
      </tbody> */}  
    </table>
    <div>
      {filteredData.map((videos) => {
          return (
            <Timetableattribute key={videos.sid} videos={videos} />
          );
        })}
      </div> 
    </div>
    </>
  );
};

export default TimeTable;
