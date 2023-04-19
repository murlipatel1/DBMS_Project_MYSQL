import React, { useState , useEffect,useContext} from 'react';
import './timetable.css';
import Timetableattribute from './Timetableattribute';
import noteContext from "../context/notes/noteContext";

const TimeTable = () => {
  const [semFilter, setSemFilter] = useState('');
  const [roomNoFilter, setRoomNoFilter] = useState('');
  // const [nameFilter, setNameFilter] = useState('');
  // const [ageFilter, setAgeFilter] = useState('');
  // const [students, setStudents] = useState([]);
// http://localhost:5000/users

const context = useContext(noteContext);
  const { video, getNotes,getTimetable } = context;
  useEffect(() => {
    getTimetable();
  }, []);

  const filteredData = video.filter((row) =>
  row.sem.toString().includes(semFilter) &&
  row.room_no.toString().includes(roomNoFilter)
);

//   const filteredData = data.filter((row) =>
//   row.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
//   row.age.toString().includes(ageFilter)
// );

  return (
    <>
    
    <div className="table-container">
    <input type="text" value={semFilter} onChange={(e) => setSemFilter(e.target.value)} placeholder="Search by Sem" />
        <input type="text" value={roomNoFilter} onChange={(e) => setRoomNoFilter(e.target.value)} placeholder="Search by Room No" />
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
