import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {
  let navigate = useNavigate()
  const host = "http://localhost:5000"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsValid(value.endsWith('.pdpu.ac.in'));
  };

  const handleSubmit = async (e) => {
    // console.log("Clicked")
    e.preventDefault();
    navigate("/timetable")
    // const response = await fetch(`${host}/users`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({email: email , password: password }),
    // });
    // const json = await response.json()
    // console.log(json)

    // if(json.success){
    // // redirect
    // // localStorage.setItem('token',json.success)
    // navigate("/overview")
    // }else{
    //   alert("Invalid Type")
    // }
  }


  return (
    <div className="login-container">
      <h2>Login for students</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
