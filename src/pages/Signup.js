import React, { useState } from "react";
import "../styles/signup.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error("Erreur :", error));
  }

  return React.createElement(
    "div",
    { className: "signup" },
    React.createElement(Navbar),
    React.createElement(
      "div",
      { className: "signup-container" },
      React.createElement("h2", null, "Créer un compte"),
      React.createElement(
        "form",
        { onSubmit: handleSubmit },
        React.createElement("input", {
          type: "text",
          name: "name",
          placeholder: "Nom complet",
          value: formData.name,
          onChange: handleChange,
          required: true,
        }),
        React.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "Email",
          value: formData.email,
          onChange: handleChange,
          required: true,
        }),
        React.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "Mot de passe",
          value: formData.password,
          onChange: handleChange,
          required: true,
        }),
        React.createElement("button", { type: "submit" }, "S'inscrire")
      )
    ),
    React.createElement(Footer)
  );
}

export default Signup;
