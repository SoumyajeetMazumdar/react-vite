// import React from "react";
// import ReactDOM from "react-dom/client";
import Navbar from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  const toggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <div className="container">
      <Navbar darkMode={dark} toggleDarkMode={toggle} />
      <Main darkMode={dark} />
    </div>
  );
}
