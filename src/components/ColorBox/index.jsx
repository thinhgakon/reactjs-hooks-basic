import React from "react";
import { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const initColor = localStorage.getItem("box-color") || "deeppink";
  const [color, setColor] = useState(initColor);

  function handleOnClick() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      onClick={handleOnClick}
      className="color-box"
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorBox;
