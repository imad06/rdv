import React, { useState } from "react";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    fetch("http://localhost:5000/user-appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Connexion réussie") {
          localStorage.setItem("userEmail", email);
          setAppointments(data.appointments);
          setIsLoggedIn(true);
        } else {
          alert("Échec de connexion : " + data.message);
        }
      })
      .catch((error) => console.error("Erreur :", error));
  }

  function handleLogout() {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setAppointments([]);
  }

  return (
    <div className={isLoggedIn ? "logged-in-container" : "login-container"}>
  {!isLoggedIn ? (
    <div>
      <h2>Connexion</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  ) : (
    <div>
      <h2>Bienvenue, {email}</h2>
      <h3>Rendez-vous disponibles</h3>
      <ul>
        {appointments.length > 0 ? (
          appointments.map((appt) => (
            <li key={appt.id}>
              {appt.date} à {appt.time}
            </li>
          ))
        ) : (
          <p>Aucun rendez-vous disponible pour le moment.</p>
        )}
      </ul>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  )}
</div>

  );
}

export default Login;
