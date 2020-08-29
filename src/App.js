import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import ColorBox from "./components/ColorBox";

function App() {

  return (
    <div className="app">
      <h1>Welcome to React Hooks!</h1>
      <ColorBox />
    </div>
  );
}

export default App;
