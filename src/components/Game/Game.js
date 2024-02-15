import React, {useState} from 'react';

import GuessInput from "../GuessInput";
import {MAX_GUESSES} from "../../constants";
import Guess from "../Guess";

function Game({answer}) {
    const [currentGuesses, setCurrentGuesses] = useState(Array(6).fill("     "));
    const [count, setCount] = useState(0)
    console.info({answer});

    const recordGuess = (guess) => {
        if (!currentGuesses.includes(guess)){
            const newGuesses = [...currentGuesses]
            newGuesses[count] = guess
            setCurrentGuesses(newGuesses)
            setCount(count + 1)
        }
    }

    return <>
        <div className="guess-results">
            {currentGuesses.map((guess, index) => <Guess guess={guess} key={index}/>)}
        </div>
        {count < MAX_GUESSES && <GuessInput recordGuess={recordGuess}/>}
    </>;
}

export default Game;
