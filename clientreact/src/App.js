import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login  from './components/Login';
import Forgetpassword  from './components/Forgetpassword';
import Signup  from './components/Signup';
import NoteState from './context/notes/NoteState';
// import Table  from './components/Table';
import TimeTable from './components/TimeTable';
import Timetableattribute from './components/Timetableattribute';
import StudentTable from './components/StudentTable';
function App() {
  return (
    <>
    <NoteState> 
    <Routes> 

        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/table" element={<table />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgotpassword" element={<Forgetpassword />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route exact path="/studenttable" element={<StudentTable />} />
        <Route exact path="/timetable" element={<TimeTable />} />
        {/* <Route exact path="/signup" element={<signup />} /> */}
      </Routes>
      </NoteState>
    </>
  );
}

export default App;
