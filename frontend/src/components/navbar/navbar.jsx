import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

export default ({ user, logout, openModal}) => {
  let display;
  if (user) {
    display = {
            link1: <span >{user.username ? `Welcome, ${user.username}` : user.email }</span>,
            link2: <a onClick={logout}>Logout</a>
    }
   } else{ 
     display = {
         link1: <a className="btn" onClick={()=> openModal('signup')}>Signup</a>,
         link2: <a className="btn" onClick={()=> openModal('login')}>Login</a>
     }
    }

    return (
      <div className="navbar">
        <div className="west-side">
          <div id='nav-logo'>
            <div id='nav-logo-tag-1'></div>
            <div id='nav-logo-ele'></div>
          </div>
        </div>

        <div className="east-side">
            
          <div className="the-righters">

            <div className="user-stuff">
              <ul className="username-email">
                <li className="link1">{display.link1}</li>
                <li className="link2">{display.link2}</li>
              </ul>
            </div>
            <div id='nav-logo-backslash'></div>
            <div id='nav-logo-tag-2'></div>
          </div>
        </div>
      </div>
    )
} 

