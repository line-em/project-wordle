import Game from '../Game';
import Header from '../Header';
import {useState} from "react";
import LangChooser from "../LangChooser";

function App() {
    const [lang, setLang] = useState("")

    return (
        <main className="wrapper">
            <Header/>
            <section className="game-wrapper">
                {lang === "" ?
                    <LangChooser chooseLang={setLang}/>
                    :
                    <Game lang={lang}/>
                }
            </section>
        </main>
    );
}

export default App;
