import React, {useState} from 'react';

function GuessInput({recordGuess}) {
    const [guessInput, setGuessInput] = useState("")

    const handleInput = (e) => {
        const {value} = e.target
        const regex = /^[A-Za-z]{0,5}$/

        if (regex.test(value)) {
            let upperInput = value.toUpperCase();
            setGuessInput(upperInput)
        }
    }

    const handleGuess = (e) => {
        e.preventDefault()
        console.log(guessInput);
        recordGuess(guessInput)
        setGuessInput("")
    }

    return <form className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input minLength={5} maxLength={5} pattern="[A-Za-z]" id="guess-input" type="text"
               value={guessInput} onChange={(e) => handleInput(e)}/>
        <button disabled={guessInput.length !== 5} onClick={(e) => handleGuess(e)}>Guess</button>
    </form>;
}

export default GuessInput;
