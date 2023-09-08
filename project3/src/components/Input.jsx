// import React from "react";
import { useState } from "react";

import memesdata from "/Users/soumy/Desktop/React/react-vite-git-repo/react-vite/project3/memesdata.js";

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

function Input() {
  function handleClick() {
    const memeArr = memesdata.data.memes;
    let randindex = Math.floor(Math.random() * memeArr.length);

    let randmeme = memeArr[randindex];
    // setImgUrl(randmeme.url);

    setMeme((prev) => {
      return {
        topText: prev.topText,
        bottomText: prev.bottomText,
        url: randmeme.url,
      };
    });

    console.log(meme.topText, meme.bottomText);
  }

  // const [imgUrl, setImgUrl] = useState("");
  const [meme, setMeme] = useState({
    topText: document.querySelector("#input-1").value,
    bottomText: document.querySelector("#input-2").value,
    url: "",
  });

  return (
    <>
      <div className="input">
        <form className="input-container">
          <input
            type="text"
            name="input-1"
            id="input-1"
            className="input-box"
            placeholder="Enter here"
          />
          <input
            type="text"
            name="input-2"
            id="input-2"
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
          <img src={meme.url} alt="" />
        </div>
      </div>
    </>
  );
}

export default Input;
