import React from "react";
import logo from "../images/LittleLemon.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="footer logo" className="footer-logo" />
      <div className="links-container">
        <div className="Doormat">
          <h3>Doormat</h3>
          <ul>
            <li>
              <a href="Home" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="About" target="_blank">
                About
              </a>
            </li>
            <li>
              <a href="Menu" target="_blank">
                Menu
              </a>
            </li>
            <li>
              <a href="Reservations" target="_blank">
                Reservations
              </a>
            </li>
            <li>
              <a href="Order Online" target="_blank">
                Order Online
              </a>
            </li>
            <li>
              <a href="Login" target="_blank">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div className="Contact">
          <h3>Contact</h3>
          <p>
            Address:
            <br />
            Street 19, New York
          </p>
          <p>
            Phone:
            <br />
            0314785296
          </p>
        </div>
        <div className="Social-Media">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="www.facebook.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="www.instagram.com" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="www.thread.com" target="_blank">
                Thread
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
