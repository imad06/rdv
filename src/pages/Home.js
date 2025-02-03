import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return React.createElement(
    "div",
    { className: "home" },
    React.createElement(Navbar),
    React.createElement(
      "header",
      { className: "hero" },
      React.createElement("h1", null, "Bienvenue chez notre cabinet dentaire"),
      React.createElement("p", null, "Prenez soin de votre sourire avec nos experts dentaires."),
      React.createElement(
        "a",
        { href: "/signup", className: "btn" },
        "Prendre un rendez-vous"
      )
    ),
    React.createElement(
      "section",
      { className: "services" },
      React.createElement("h2", null, "Nos Services"),
      React.createElement(
        "div",
        { className: "service-list" },
        React.createElement(
          "div",
          { className: "service" },
          React.createElement("h3", null, "Consultation"),
          React.createElement("p", null, "Obtenez un diagnostic détaillé de votre santé bucco-dentaire.")
        ),
        React.createElement(
          "div",
          { className: "service" },
          React.createElement("h3", null, "Blanchiment"),
          React.createElement("p", null, "Retrouvez un sourire éclatant grâce à notre service de blanchiment.")
        ),
        React.createElement(
          "div",
          { className: "service" },
          React.createElement("h3", null, "Soins et Prothèses"),
          React.createElement("p", null, "Des solutions adaptées pour restaurer votre dentition.")
        )
      )
    ),
    React.createElement(Footer)
  );
}

export default Home;
