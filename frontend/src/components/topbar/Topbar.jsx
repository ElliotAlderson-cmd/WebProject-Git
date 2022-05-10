import React from './topbar.css';
import {Link} from "react-router-dom";
export default function Topbar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className='link' to='/' style={{textDecoration: 'none'}}>
                    Home</Link></li>
                <li className="topListItem">
                  <Link className='link' to='categories' style={{textDecoration: 'none'}}>
                    Categories</Link></li>
                <li className="topListItem">
                  <Link className='link' to='login' style={{textDecoration: 'none'}}>
                    Login</Link></li>
                <li className="topListItem">
                  <Link className='link' to='about' style={{textDecoration: 'none'}}>
                    About</Link></li>

            </ul>
        </div>
        <div className="topRight">
            <img 
            alt="Profile pic"
            className="topImage"
            src="https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          <i className="topSearchIcon fa fa-search"></i>
        </div>
    </div>
  );
}