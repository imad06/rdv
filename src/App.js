import React, { useState } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar"; // Ajoute Navbar ici
import "./styles/navbar.css"; // Importation du CSS pour Navbar

function App() {
  const [page, setPage] = useState("home");

  function navigate(pageName) {
    setPage(pageName);
  }

  return (
    <div>
      <Navbar navigate={navigate} /> {/* Passe navigate comme prop */}
      {page === "home" && <Home />}
      {page === "signup" && <Signup />}
      {page === "login" && <Login />}
      {page === "appointment" && <Appointment />}
    </div>
  );
}

export default App;
