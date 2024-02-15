import React from "react";
import GuessCell from "../GuessCell";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  guess = guess === "" ? "     " : guess;
  const chars = Array.from(guess);
  const status = checkGuess(guess, answer);
  return (
    <p className="guess" key={guess}>
      {chars.map((char, index) => (
        <GuessCell
          char={char}
          key={guess + index}
          status={guess !== "     " && status[index].status}
        />
      ))}
    </p>
  );
}

export default Guess;
