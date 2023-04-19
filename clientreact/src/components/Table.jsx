
// student details
import React, { useState , useEffect,useContext} from 'react';
import './table.css';
import Studentdetail from './Studentdetail';
import noteContext from "../context/notes/noteContext";

const Table = () => {
  // const [nameFilter, setNameFilter] = useState('');
  // const [ageFilter, setAgeFilter] = useState('');
  // const [students, setStudents] = useState([]);
// http://localhost:5000/users

const context = useContext(noteContext);
  const { video, getNotes,likeNotes } = context;
  useEffect(() => {
     getNotes();
  }, []);

//   const filteredData = data.filter((row) =>
//   row.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
//   row.age.toString().includes(ageFilter)
// );

  return (
    <div className="table-container">
      
    <table>
      <thead>
        <tr>
          <th>sid</th>
          <th>sname</th>
          <th>sem</th>
          <th>branch</th>
          <th>s_email</th>
          <th>s_pwd</th>
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
      {video.map((videos) => {
          return (
            <Studentdetail key={videos.sid} videos={videos} />
          );
        })}
      </div> 
    </div>
  );
};

export default Table;
