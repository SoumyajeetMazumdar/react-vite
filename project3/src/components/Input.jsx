// import React from "react";
import { useState } from "react";

import memesdata from "/Users/soumy/Desktop/React/react-vite-git-repo/react-vite/project3/memesdata.js";

function Input() {
  function handleClick() {
    const memeArr = memesdata.data.memes;
    let randindex = Math.floor(Math.random() * memeArr.length);

    let randmeme = memeArr[randindex];
    setImgUrl(randmeme.url);
  }

  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <div className="input">
        <form className="input-container">
          <input
            type="text"
            name="input-1"
            id=""
            className="input-box"
            placeholder="Enter here"
          />
          <input
            type="text"
            name="input-2"
            id=""
            className="input-box"
            placeholder="enter there"
          />
          <button
            type="button"
            className="meme--button linear-grad"
            onClick={handleClick}
          >
            Get new meme images
            <img
              src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
              //   src={url}
              alt=""
            />
          </button>
        </form>

        <div className="display-meme">
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </>
  );
}

export default Input;
