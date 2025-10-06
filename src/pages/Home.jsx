import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ receitas, setReceitas }) {
  const [novaReceita, setNovaReceita] = useState({
    nome: "",
    ingredientes: "",
    preparo: "",
  });

  // Adicionar nova receita
  const adicionarReceita = (e) => {
    e.preventDefault();
    if (!novaReceita.nome || !novaReceita.ingredientes || !novaReceita.preparo)
      return;

    const id =
      receitas.length > 0 ? Math.max(...receitas.map((r) => r.id)) + 1 : 1;

    setReceitas([
      ...receitas,
      {
        id,
        nome: novaReceita.nome,
        ingredientes: novaReceita.ingredientes.split(","),
        preparo: novaReceita.preparo,
        favorito: false,
      },
    ]);

    setNovaReceita({ nome: "", ingredientes: "", preparo: "" });
  };

  // Alternar favorito
  const toggleFavorito = (id) => {
    setReceitas(
      receitas.map((r) => (r.id === id ? { ...r, favorito: !r.favorito } : r))
    );
  };

  // Excluir receita
  const excluirReceita = (id) => {
    setReceitas(receitas.filter((r) => r.id !== id));
  };

  return (
    <div className="home">
      <h2>Receitas Recentes</h2>
      <ul>
        {receitas.map((r) => (
          <li key={r.id}>
            <Link to={`/receita/${r.id}`}>{r.nome}</Link>
            <div>
              <button
                className={`btn-fav ${r.favorito ? "ativo" : ""}`}
                onClick={() => toggleFavorito(r.id)}
              >
                {r.favorito ? "★ Favorito" : "☆ Favoritar"}
              </button>
              <button
                className="btn-excluir"
                onClick={() => excluirReceita(r.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Adicionar Nova Receita</h3>
      <form onSubmit={adicionarReceita} className="form-receita">
        <input
          type="text"
          placeholder="Nome"
          value={novaReceita.nome}
          onChange={(e) =>
            setNovaReceita({ ...novaReceita, nome: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Ingredientes (separados por vírgula)"
          value={novaReceita.ingredientes}
          onChange={(e) =>
            setNovaReceita({ ...novaReceita, ingredientes: e.target.value })
          }
        />
        <textarea
          placeholder="Preparo"
          value={novaReceita.preparo}
          onChange={(e) =>
            setNovaReceita({ ...novaReceita, preparo: e.target.value })
          }
        />
        <button type="submit" className="btn-add">
          Adicionar Receita
        </button>
      </form>
    </div>
  );
}

export default Home;
