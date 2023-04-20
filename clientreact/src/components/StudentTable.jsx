
// // student details
// import React, { useState , useEffect,useContext} from 'react';
// import './studenttable.css';
// import Studentdetail from './Studentdetail';
// import noteContext from "../context/notes/noteContext";

// const StudentTable = () => {


// const context = useContext(noteContext);
//   const { video, getNotes,likeNotes } = context;
//   useEffect(() => {
//      getNotes();
//   }, []);

//   return (
//     <div className="table-container">
      
//     <table>
//       <thead>
//         <tr>
//           <th>sid</th>
//           <th>sname</th>
//           <th>sem</th>
//           <th>branch</th>
//           <th>s_email</th>
//           <th>s_pwd</th>
//         </tr>
//       </thead>
//     </table>
//     <div>
//       {video.map((videos) => {
//           return (
//             <Studentdetail key={videos.sid} videos={videos} />
//           );
//         })}
//       </div> 
//     </div>
//   );
// };

// export default StudentTable;


// student details
import React, { useState , useEffect,useContext} from 'react';
import './studenttable.css';
import Studentdetail from './Studentdetail';
import noteContext from "../context/notes/noteContext";

const StudentTable = () => {
  const [filter, setFilter] = useState("");
  const context = useContext(noteContext);
  const { video, getNotes } = context;
  
  useEffect(() => {
     getNotes();
  }, []);

  const filteredVideo = video.filter((student) => {
    return (
      student.sid.includes(filter) ||
      student.sem.includes(filter) ||
      student.sname.includes(filter) ||
      student.s_email.includes(filter) ||
      student.branch.includes(filter) 
    );
  });

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="table-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search ..."
          value={filter}
          onChange={handleFilterChange}
        />
        {/* <button>Search</button> */}
      </div>
      <table>
        <thead>
          <tr>
            <th>sid</th>
            <th>sname</th>
            <th>sem</th>
            <th>branch</th>
            <th>s_email</th>
          </tr>
        </thead>
        <tbody>
          {filteredVideo.map((student) => (
            <Studentdetail key={student.sid} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
