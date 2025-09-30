import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/building.png"
          alt="logo"
        />
        <h1>Buildlinks</h1>
      </div>

      {/* Menu */}
      <ul className="menu">
        <li>Home</li>
        <li>Service</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Contact Us</li>
      </ul>

      {/* Right section */}
      <div className="right">
        <button className="register-btn">Register</button>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
