import Game from '../Game';
import Header from '../Header';
import {useState} from "react";

function App() {
    const [lang, setLang] = useState("")

    return (
        <main className="wrapper">
            <Header/>
            <section className="game-wrapper">
                {lang === "" ?
                    <div className="lang-wrapper">
                        <h1>Choose your language:</h1>
                        <button onClick={() => setLang("EN")}>ENGLISH</button>
                        <button onClick={() => setLang("PT")}>PORTUGUÊS</button>
                    </div> : <Game lang={lang}/>
                }
            </section>
        </main>
    );
}

export default App;
