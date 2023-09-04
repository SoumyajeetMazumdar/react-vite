// eslint-disable-next-line no-unused-vars
import React from "react";
import profilePic from "../assets/profile.jpg";
import emailicon from "../assets/mail-fill.png";
import linkedinicon from "../assets/linkedin-box-fill.png";
function Header() {
  return (
    <header className="header">
      <img className="profile-pic" src={profilePic} alt="" />

      <h1>Laura Smith</h1>
      <h3>Assitant Professor</h3>
      <p>Hi, I am Laura and I teach computer sciene at Yale University.</p>
      <button className="email-btn">
        <img src={emailicon} alt="" />
        Email
      </button>
      <button className="linkedin-btn">
        <img src={linkedinicon} alt="" />
        Linkedin
      </button>
    </header>
  );
}
export default Header;
