import React, { useState } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";

function App() {
  const [page, setPage] = useState("home");

  function navigate(pageName) {
    setPage(pageName);
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "nav",
      null,
      React.createElement(
        "button",
        { onClick: () => navigate("home") },
        "Accueil"
      ),
      React.createElement(
        "button",
        { onClick: () => navigate("signup") },
        "Inscription"
      ),
      React.createElement(
        "button",
        { onClick: () => navigate("login") },
        "Connexion"
      ),
      React.createElement(
        "button",
        { onClick: () => navigate("appointment") },
        "Prendre un Rendez-Vous"
      )
    ),
    page === "home"
      ? React.createElement(Home)
      : page === "signup"
      ? React.createElement(Signup)
      : page === "login"
      ? React.createElement(Login)
      : React.createElement(Appointment)
  );
}

export default App;
