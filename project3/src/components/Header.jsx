// import React from "react";

import meme from "../assets/troll-face-png-19700.png";
function Header() {
  return (
    <header className="linear-grad">
      <div className="header--left">
        <img src={meme} alt="" className="header--logo" />
        <h4>Meme Generator</h4>
      </div>
      <h5 className="header--right">React Course - Project 3</h5>
    </header>
  );
}

export default Header;
