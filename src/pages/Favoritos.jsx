import React from "react";
import { Link } from "react-router-dom";

function Favoritos({ receitas }) {
  const receitasFavoritas = receitas.filter((r) => r.favorito);

  if (receitasFavoritas.length === 0) {
    return (
      <div className="favoritos">
        <h2>Favoritos</h2>
        <p>Você ainda não marcou nenhuma receita como favorita.</p>
        <Link to="/" className="btn-voltar">
          Voltar para Receitas
        </Link>
      </div>
    );
  }

  return (
    <div className="favoritos">
      <h2>Receitas Favoritas</h2>
      <ul>
        {receitasFavoritas.map((r) => (
          <li key={r.id}>
            <Link to={`/receita/${r.id}`}>{r.nome}</Link> ★
          </li>
        ))}
      </ul>
      <Link to="/" className="btn-voltar">
        Voltar para Receitas
      </Link>
    </div>
  );
}

export default Favoritos;
