import Game from '../Game';
import Header from '../Header';
import {useState} from "react";
import LangChooser from "../LangChooser";
import {sample} from "../../utils";
import {EN_WORDS} from "../../words-en";
import {PT_WORDS} from "../../words-ptbr";

function App() {
    const [lang, setLang] = useState("")
    const answer = sample(lang === "EN" ? EN_WORDS : PT_WORDS);
    return (
        <main className="wrapper">
            <Header/>
            <section className="game-wrapper">
                {lang === "" ?
                    <LangChooser chooseLang={setLang}/>
                    :
                    <Game answer={answer}/>
                }
            </section>
        </main>
    );
}

export default App;
