import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Mini Blog de Receitas</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
