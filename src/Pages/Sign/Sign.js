import React from "react";
import {Link} from "react-router-dom";
import "./Sign.css";
import logo from "../../assets/Navbar/netflix.png";
import globe from "../../assets/Navbar/globe.png";

const Sign = () => {
  return (
    <div className="signin-section">
      <div className="sign-logo">
        <img src={logo} alt="logo"/>
        <div className="sign-in">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
      <div className="sign-up">
        <form className="sign-form">
            <div className="sign-heading">
              <h1>Sign in</h1>
            </div>
            <div className="sign-input">
              <input type="email" placeholder="Email or Phone number" />
              <input type="password" placeholder="password" />
            </div>
            <div className="sign-button">
              <button id="Btn">Sign In</button>
              <div className="remember">
                <p>Remember me</p>
                <p id="help">Need help?</p>
              </div>
            </div>
            <div className="captcha">
              <div className="new">
                <p id='new'>New to Netflix?</p>
                <p id='now'>Sign up now.</p>
              </div>
              <div className="google-captcha">
                <p>
                  This page is protected by Google reCAPTCHA to<span/>ensure you're
                  not a bot. <button id="learn">Learn more.</button>
                </p>
              </div>
            </div>
        </form>
      </div>

      <div className="sign-footer">
        <div className="call">
          <p>Questions? Call</p>
          <p id="number">000-800-040-1843</p>
        </div>
        <div className="footer-links">
          <div className="f1">
            <p>FAQ</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="f1">
            <p>Help Centre</p>
            <p>Corporate Information</p>
          </div>
          <div className="f1">
            <p>Terms of Use</p>
            <p id="netflix">Netflix</p>
          </div>
          <div className="f1">
            <p>Privacy</p>
            <p id="netflix">Netflix</p>
          </div>
        </div>
        <div className="footer-language">
        <div className="footer-globe">
          <img src={globe} alt="globe"/>
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
      </div>
    </div>
  );
};

export default Sign;
