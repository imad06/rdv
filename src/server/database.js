const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // Par défaut sous WAMP, l'utilisateur est "root"
  password: "",      // Par défaut, aucun mot de passe
  database: "dentist_appointments",
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
  } else {
    console.log("Connecté à la base de données MySQL !");
  }
});

module.exports = db;
