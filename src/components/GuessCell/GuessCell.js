import React from "react";

function GuessCell({ char, status }) {
  console.log(status);
  return <span className={`cell ${status}`}>{char}</span>;
}

export default GuessCell;
