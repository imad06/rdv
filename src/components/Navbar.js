import React from "react";
import "../styles/navbar.css";

function Navbar({ navigate }) {  // Ajouter navigate en paramètre
  return (
    <nav className="navbar">
      <h2>Cabinet Dentaire</h2>
      <ul>
        <li><button onClick={() => navigate("home")}>Accueil</button></li>
        <li><button onClick={() => navigate("login")}>Se connecter</button></li>
        <li><button onClick={() => navigate("signup")}>S'inscrire</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
