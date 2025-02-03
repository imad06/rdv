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

  return (
    <div className="signup">
      <Navbar />
      <div className="signup-container">
        <h2>Créer un compte</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
