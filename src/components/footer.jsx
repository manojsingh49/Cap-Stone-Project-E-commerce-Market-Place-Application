import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section join-rewards">
        <h3>SEE IT FIRST</h3>
        <p>Enter your email address</p>
        <input type="email" placeholder="Your email address" />
        <button>JOIN</button>
      </div>
      <div className="footer-section customer-support">
        <h3>Customer Support</h3>
        <ul>
          <li>
            <Link to="/customer-service">Customer Service</Link>
          </li>
          <li>
            <Link to="/store-locator">Store Locator</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section about-us">
        <h3>About Us</h3>
        <ul>
          <li>
            <Link to="/our-values">Our Values</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/get-app">Get the App</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
