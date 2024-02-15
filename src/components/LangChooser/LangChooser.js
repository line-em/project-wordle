import React from 'react';

const LangChooser = ({chooseLang}) => {
    return (
        <div className="lang-wrapper">
            <h1>Choose your language:</h1>
            <button onClick={() => chooseLang("EN")}>ENGLISH</button>
            <button onClick={() => chooseLang("PT")}>PORTUGUÊS</button>
        </div>
    )
}

export default LangChooser