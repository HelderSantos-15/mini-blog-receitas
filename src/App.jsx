import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Receita from "./pages/Receita";
import Sobre from "./pages/Sobre";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [receitas, setReceitas] = useState([
    {
      id: 1,
      nome: "Bolo de Chocolate",
      ingredientes: ["Chocolate", "Farinha", "Ovos"],
      preparo: "Misture tudo e asse.",
      favorito: false,
    },
    {
      id: 2,
      nome: "Macarrão ao Molho",
      ingredientes: ["Macarrão", "Molho de tomate"],
      preparo: "Cozinhe o macarrão e adicione o molho.",
      favorito: false,
    },
    {
      id: 3,
      nome: "Salada Colorida",
      ingredientes: ["Alface", "Tomate", "Cenoura"],
      preparo: "Misture todos os ingredientes.",
      favorito: false,
    },
  ]);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home receitas={receitas} setReceitas={setReceitas} />}
          />
          <Route
            path="/receita/:id"
            element={<Receita receitas={receitas} />}
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/favoritos"
            element={<Favoritos receitas={receitas} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
