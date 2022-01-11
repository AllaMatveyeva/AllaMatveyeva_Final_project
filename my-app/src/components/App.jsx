import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthContext from "./contexts/AuthContext";

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import Alphabet from "./usercard/alphabet/alphabet";
import Books from "./books/book/books";
import Quotes from "../components/usercard/usercardModal/quotes/quotes";
import { withTheme } from "../hoc/theme";
import Menu from "./menu/menu";
import Movie from "./movie/movie";
import MenuSmall from "./menuSmall/menuSmall";
import LoginPage from "./loginPage/loginPage";
import "./App.scss";

function App({ setThemeFromStore }) {
  const [me, setMeToState] = useState(JSON.parse(localStorage.getItem("me")));

  const setMe = (me) => {
    localStorage.setItem("me", JSON.stringify(me));
    setMeToState(me);
  };

  useEffect(() => setThemeFromStore(), []);
  // const screenWidth = window.screen.width;

  return (
    <AuthContext.Provider value={{ me, setMe }}>
      <div className="App">
        <Header />
        <div className="section">
          {/* {screenWidth >= 950 ? <Menu /> : <MenuSmall />} */}
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="alphabet" element={<Alphabet />} />
              <Route path="books" element={<Books />} />
              <Route path="movies" element={<Movie />} />
              <Route path="characters/:id/quotes" element={<Quotes />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default withTheme(App);
