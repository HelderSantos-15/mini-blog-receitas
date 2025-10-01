import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ receitas, setReceitas }) {
  const [novaReceita, setNovaReceita] = useState({ nome: "", ingredientes: "", preparo: "" });

  const adicionarReceita = (e) => {
    e.preventDefault();
    if (!novaReceita.nome || !novaReceita.ingredientes || !novaReceita.preparo) return;

    const id = receitas.length + 1;
    setReceitas([...receitas, { 
      id, 
      nome: novaReceita.nome, 
      ingredientes: novaReceita.ingredientes.split(","), 
      preparo: novaReceita.preparo,
      favorito: false 
    }]);
    setNovaReceita({ nome: "", ingredientes: "", preparo: "" });
  };

  const toggleFavorito = (id) => {
    setReceitas(receitas.map(r => r.id === id ? { ...r, favorito: !r.favorito } : r));
  };

  return (
    <div className="home">
      <h2>Receitas Recentes</h2>
      <ul>
        {receitas.map((r) => (
          <li key={r.id}>
            <Link to={`/receita/${r.id}`}>{r.nome}</Link>
            <button 
              className={`btn-fav ${r.favorito ? "ativo" : ""}`} 
              onClick={() => toggleFavorito(r.id)}
            >
              {r.favorito ? "★ Favorito" : "☆ Favoritar"}
            </button>
          </li>
        ))}
      </ul>

      <h3>Adicionar Nova Receita</h3>
      <form onSubmit={adicionarReceita} className="form-receita">
        <input type="text" placeholder="Nome" value={novaReceita.nome} onChange={(e) => setNovaReceita({ ...novaReceita, nome: e.target.value })} />
        <input type="text" placeholder="Ingredientes (separados por vírgula)" value={novaReceita.ingredientes} onChange={(e) => setNovaReceita({ ...novaReceita, ingredientes: e.target.value })} />
        <textarea placeholder="Preparo" value={novaReceita.preparo} onChange={(e) => setNovaReceita({ ...novaReceita, preparo: e.target.value })}></textarea>
        <button type="submit" className="btn-add">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default Home;
