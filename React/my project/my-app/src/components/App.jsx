import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import Alphabet from "./usercard/alphabet/alphabet";
import Books from "./books/book/books";
import Quotes from "../components/usercard/usercardModal/quotes/quotes";
import { withTheme } from "../hoc/theme";
import Menu from "./menu/menu";
import Movie from "./movie/movie";

import "./App.scss";

function App({ setThemeFromStore }) {
  useEffect(() => setThemeFromStore(), []);

  return (
    <div className="App">
      <Header />
      <div className="section">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="alphabet" element={<Alphabet />} />
            <Route path="books" element={<Books />} />
            <Route path="movies" element={<Movie />} />
            <Route path="characters/:id/quotes" element={<Quotes />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default withTheme(App);
