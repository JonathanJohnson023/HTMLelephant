import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

export default ({ user, logout, openModal, createDocument}) => {
  let display;
  if (user) {
    display = {
            link1: <span >{user.email}</span>,
            link2: <p onClick={logout}>Logout</p>
    }
   } else{ 
     display = {
         link1: <p className="btn" onClick={()=> openModal('signup')}>Signup</p>,
         link2: <p className="btn" onClick={()=> openModal('login')}>Login</p>
     }
    }

    return (
      <div className="navbar">
        <div className="west-side">
          <div id='nav-logo'>
            <div id='nav-logo-tag-1'></div>
            <Link to="/"><div id='nav-logo-ele'></div></Link>
          </div>
        </div>

        <div className="east-side">
            
          <div className="the-righters">

            <div className="user-stuff">
              <ul className="username-email">
                {/* <li onClick={() => createDocument({title: "title", tags: []})}>Hello there save Doc</li> */}
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

