import {LOGO_URL} from '../utils/constants';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
  const [btnName , setBtnName]=useState("Login")
  useEffect(()=>{
    console.log("Effect render");
  },[]);

  console.log("Header");
    return (
       <div className="header">
        <div className="h-logo">
          <img alt="Logo"  src={LOGO_URL}/ > 
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home </Link> </li>
            <li> <Link to="/About"> About Us </Link> </li>
            <li> <Link to="/Contact">Contact Us </Link> </li>
            <li> Cart</li>
            <button className="Login" 
            onClick={() => {
             btnName=="Login"?  setBtnName("Logout") : setBtnName("Login")
            }}> {btnName} </button>
          </ul>
        </div>
       </div>
    )
  };

export default Header  