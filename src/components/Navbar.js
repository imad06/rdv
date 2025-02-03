import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return React.createElement(
    "nav",
    { className: "navbar" },
    React.createElement("h2", null, "Cabinet Dentaire"),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, React.createElement("a", { href: "/" }, "Accueil")),
      React.createElement("li", null, React.createElement("a", { href: "/login" }, "Se connecter")),
      React.createElement("li", null, React.createElement("a", { href: "/signup" }, "S'inscrire"))
    )
  );
}

export default Navbar;
