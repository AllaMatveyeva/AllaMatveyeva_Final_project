import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import Alphabet from "./charactersCard/alphabet/alphabet";
import Books from "./books/book/books";
import Quotes from "../components/charactersCard/charactersCardModal/quotes/quotes";
import { withTheme } from "../hoc/theme";
import Menu from "./menu/menu";
import Movie from "./movie/movie";

import LoginPage from "./loginPage/loginPage";
import "./App.scss";
import Filtr from "./filtr/filtr";

function App({ setThemeFromStore }) {
  useEffect(() => setThemeFromStore());

  return (
    <div className="App">
      <Header />
      <div className="section">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="alphabet" element={<Alphabet />} />
            <Route path="filtr/:optionId/:valueId" element={<Filtr />} />
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
