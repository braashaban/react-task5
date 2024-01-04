/* import React from 'react'
import logo from "../../images/logo.png"
import  "./NavBar.css"
const NavBar = () => {
  return (
   
       <div className="main">
        <img src={logo} alt="logo" />
        
      
        <ul> 
           <a href=""><li> Home </li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Packages</li></a>
            <a href=""><li>Services</li></a>
        </ul>
        <button className='navbtn'>Get in Touch</button>
    </div>

  )
}

export default NavBar */


import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <div className="mains">
		  <img src={logo} alt="logo" />
			<nav ref={navRef}>

			<Link to="/">Home</Link>
			<Link to="/">My work</Link>
			<Link to="/Packages">Blog</Link>
			<Link to="/About">About me</Link>
				
				{/* <a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
        <button className='navbtn'>Get in Touch</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navbar; 