import React from "react";

function choice(array) {
  const rIndex = Math.floor(Math.random() * array.length);
  return array[rIndex];
}

export default choice;
