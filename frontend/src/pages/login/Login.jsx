import React from "./login.css";
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm">
        
        <label>Username</label>
        <input className="loginInput" 
          type="text" 
          placeholder="Enter your username"></input>
        
        <label>Password</label>
        <input className="loginInput" 
          type="password" 
          placeholder="Enter your password"></input>
        
        <button className="loginButton">Login</button>
    </form>
    <button className="loginRegisterButton">
      <Link className="link" to="/register">
        Register
      </Link>
    </button>
</div>
  );
}
