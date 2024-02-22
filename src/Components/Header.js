import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <header className="container">
      <div className="logo">
        <img src={logo} alt="Lemon Lemon" />
      </div>
      <nav className="navbar">
        <ul>
          <li className="items">
            <a href="Home" target="_blank">
              Home
            </a>
          </li>
          <li className="items">
            <a href="About" target="_blank">
              About
            </a>
          </li>
          <li className="items">
            <a href="Menu" target="_blank">
              Menu
            </a>
          </li>
          <li className="items">
            <a href="Reserve a table" target="_blank">
            Reserve a table
            </a>
          </li>
          <li className="items">
            <a href="Order Online" target="_blank">
              Order Online
            </a>
          </li>
          <li className="items">
            <a href="Login" target="_blank">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
