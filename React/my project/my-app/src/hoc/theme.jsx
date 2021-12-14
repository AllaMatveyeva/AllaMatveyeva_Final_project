import Ligth from "../../src/bacgroundLigth1.jpg";
import Dark from "../../src/bacgroundDark.jpg";

let theme;

function getBodyBackground() {
  return theme === "dark"
    ? (document.body.style.backgroundImage = `url(${Dark})`)
    : (document.body.style.backgroundImage = `url(${Ligth})`);
}

export const withTheme = (Component) => (props) => {
  const setThemeFromStore = () => {
    theme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", theme);
    getBodyBackground();
  };

  const toggleTheme = () => {
    let newTheme = theme === "dark" ? "light" : "dark";
    console.log(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    theme = newTheme;
    localStorage.setItem("theme", theme);
    getBodyBackground();
  };

  return (
    <Component
      setThemeFromStore={setThemeFromStore}
      toggleTheme={toggleTheme}
      {...props}
    />
  );
};
