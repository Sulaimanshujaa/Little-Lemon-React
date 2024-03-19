import React from "react";
import './Header.css';
import logo from "../logo.svg";

function Header() {
  return (
    <nav id="navbar-container">
      <div id="logo">
        <img src={logo} className="logo" alt="littlelemon.com" />
      </div>
        <ul id="navbar">
          <li className="item" id="item-1">
            <a href="Home">Home</a>
          </li>
          <li className="item" id="item-2">
            <a href="About">About</a>
          </li>
          <li className="item" id="item-3">
            <a href="Menu">Menu</a>
          </li>
          <li className="item" id="item-4">
            <a href="Reservations">Reservations</a>
          </li>
          <li className="item" id="item-5">
            <a href="Orderonline">Order Online</a>
          </li>
          <li className="item" id="item-6">
            <a href="Login">Login</a>
          </li>
        </ul>
    </nav>
  );
}

export default Header;
