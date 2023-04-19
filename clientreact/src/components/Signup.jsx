import React,{useState} from 'react'
import './signup.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="email-input">Email:</label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );

  }
  
export default Signup