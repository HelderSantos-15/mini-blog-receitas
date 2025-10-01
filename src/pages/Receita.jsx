import React from "react";
import { useParams, Link } from "react-router-dom";

function Receita({ receitas }) {
  const { id } = useParams();
  const receita = receitas.find(r => r.id === parseInt(id));

  if (!receita) return <p>Receita não encontrada!</p>;

  return (
    <div className="receita">
      <h2>{receita.nome}</h2>
      <h3>Ingredientes:</h3>
      <ul>
        {receita.ingredientes.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
      <h3>Preparo:</h3>
      <p>{receita.preparo}</p>
      <Link to="/" className="btn-voltar">Voltar</Link>
    </div>
  );
}

export default Receita;
