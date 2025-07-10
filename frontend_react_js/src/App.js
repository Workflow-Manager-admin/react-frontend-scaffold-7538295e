import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import TicTacToe from "./pages/TicTacToe";
import { AppProvider, useAppContext } from "./context/AppContext";

// Theme toggle button as modern floating action
function ThemeToggle() {
  const { state, dispatch } = useAppContext();
  const { theme } = state;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    dispatch({ type: "SET_THEME", theme: theme === "light" ? "dark" : "light" });
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Main application with context, header/footer, routing, and responsive layout. */
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <ThemeToggle />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tictactoe" element={<TicTacToe />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
