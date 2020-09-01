import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

function formatDate(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default Clock;
