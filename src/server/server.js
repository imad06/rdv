const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route d'inscription (sans hachage du mot de passe)
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  
  // Insertion directe du mot de passe en clair
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'insertion :", err);
      res.status(500).json({ message: "Erreur lors de l'inscription" });
    } else {
      console.log("Résultat de l'insertion :", result);
      res.status(201).json({ message: "Inscription réussie !" });
    }
  });
});

// Démarrage du serveur
app.listen(5000, () => {
  console.log("Serveur backend démarré sur le port 5000");
});


// Route de connexion
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Erreur lors de la connexion :", err);
      return res.status(500).json({ message: "Erreur lors de la connexion" });
    }
    if (results.length > 0) {
      res.status(200).json({ message: "Connexion réussie !" });
    } else {
      res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }
  });
});

// Route pour récupérer les rendez-vous disponibles après connexion
app.post("/user-appointments", (req, res) => {
  const { email, password } = req.body;

  // Vérifier si l'utilisateur existe
  const userQuery = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(userQuery, [email, password], (err, users) => {
    if (err) {
      console.error("Erreur de connexion :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    if (users.length === 0) {
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    // Si l'utilisateur est authentifié, récupérer ses rendez-vous
    const appointmentQuery = "SELECT * FROM appointments WHERE user_email IS NULL";
    db.query(appointmentQuery, (err, appointments) => {
      if (err) {
        console.error("Erreur récupération rdvs :", err);
        return res.status(500).json({ message: "Erreur serveur" });
      }
      res.status(200).json({ message: "Connexion réussie", appointments });
    });
  });
});

// Route pour réserver un rendez-vous
app.post("/book-appointment", (req, res) => {
  const { appointmentId, userEmail } = req.body;

  const sql = "UPDATE appointments SET user_email = ? WHERE id = ? AND user_email IS NULL";
  db.query(sql, [userEmail, appointmentId], (err, result) => {
    if (err) {
      console.error("Erreur lors de la réservation :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Rendez-vous déjà pris" });
    }
    res.status(200).json({ message: "Rendez-vous réservé avec succès !" });
  });
});

