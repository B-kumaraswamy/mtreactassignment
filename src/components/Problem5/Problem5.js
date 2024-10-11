// src/components/Problem5.js

import React, { useState } from "react";
import "./Problem5.css"; 

const Box = ({ size }) => {
  const [isSplit, setIsSplit] = useState(false);

  const handleClick = () => {
    setIsSplit(true);
  };

  // If the box is not split, render a single square
  if (!isSplit) {
    return (
      <div
        onClick={handleClick}
        style={{
          width: size,
          height: size,
          border: "1px solid black",
          display: "inline-block",
          boxSizing: "border-box",
        }}
      ></div>
    );
  }

  // If split, calculate new size and render 4 smaller boxes
  const newSize = size / 2;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(2, ${newSize}px)`,
        gridTemplateRows: `repeat(2, ${newSize}px)`,
        width: size,
        height: size,
        boxSizing: "border-box"
      }}
    >
      <Box size={newSize} />
      <Box size={newSize} />
      <Box size={newSize} />
      <Box size={newSize} />
    </div>
  );
};

const Problem5 = () => {
  const initialSize = 400; // Size of the initial large square

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Box size={initialSize} />
    </div>
  );
};

export default Problem5;