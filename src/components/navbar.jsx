import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🍲 Mini-Blog Receitas</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/receitas">Receitas</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
}

export default Navbar;
