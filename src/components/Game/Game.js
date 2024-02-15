import React, { useState } from "react";

import GuessInput from "../GuessInput";
import { MAX_GUESSES } from "../../constants";
import Guess from "../Guess";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";

function Game({ answer }) {
  const [currentGuesses, setCurrentGuesses] = useState(Array(6).fill(""));
  const [count, setCount] = useState(0);
  const canStillGuess = count < MAX_GUESSES;
  const foundAnswer = currentGuesses.includes(answer);

  const recordGuess = (guess) => {
    if (!currentGuesses.includes(guess)) {
      const newGuesses = [...currentGuesses];
      newGuesses[count] = guess;
      setCurrentGuesses(newGuesses);
      setCount(count + 1);
    }
  };

  const renderGuesses = () => (
    <div className="guess-results">
      {currentGuesses.map((guess, index) => (
        <Guess answer={answer} guess={guess} key={index} />
      ))}
    </div>
  );

  const showBanner = () => {
    if (foundAnswer && canStillGuess) {
      return (
        <Banner status={"success"}>
          <strong>Congrats!</strong>You got the correct word,{" "}
          <strong>
            {answer} in {count} guesses.
          </strong>
        </Banner>
      );
    } else if (!canStillGuess && !foundAnswer) {
      return (
        <Banner status={"fail"}>
          Sorry, the correct answer was <strong>{answer}</strong>
        </Banner>
      );
    }
  };

  return (
    <>
      {renderGuesses()}
      {canStillGuess && <GuessInput recordGuess={recordGuess} />}
      {showBanner()}
    </>
  );
}

export default Game;
