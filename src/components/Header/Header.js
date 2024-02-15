import React from "react";

function Header({ lang }) {
  return (
    <header>
      <h1>Word Game </h1>
      <h1>{lang === "EN" ? "🇺🇸" : lang === "PT" ? "🇧🇷" : ""}</h1>
    </header>
  );
}

export default Header;
