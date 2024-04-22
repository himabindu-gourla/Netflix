import React from "react";
import "./Footer.css";
import globe from "../../assets/Navbar/globe.png";

const Footer = ({ language }) => {
  
  return (
    <div className="footer">
      <div className="call">
        <p>Questions? Call</p>
        <p id="number">000-800-040-1843</p>
      </div>
      <div className="footer-links">
        <div className="f1">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="f1">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div className="f1">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </div>
        <div className="f1">
          <p>Media Centre</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
          <p id="netflix">Netflix</p>
        </div>
      </div>
      <div className="footer-language">
        <div className="footer-globe">
          <img src={globe} alt=""/>
        </div>
        <div id="footer-translate">
          <select className="footer-selectBox" name="lang">
            <option className="footer-optionsMenu" value="en">
              English
            </option>
            <option className="footer-optionsMenu" value="tm">
              हिन्दी
            </option>
            <option className="footer-optionsMenu" value="tl">
              తెలుగు
            </option>
            <option className="footer-optionsMenu" value="sp">
              தமிழ்
            </option>
          </select>
        </div>
      </div>
      <div className="india">
        <p>Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;
