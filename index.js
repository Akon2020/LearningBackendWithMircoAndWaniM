import express from "express";
import cors from "cors";
import db from "./database/db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Afficher tous les utilisateurs
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err)
      return res.json({
        message: "Erreur lors de la récupération des utilisateurs",
        erreur: err,
      });
    return res.json({ nombre: result.length, data: result });
  });
});

// Afficher un utilisateur par son ID
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ message: "Vous devez entrer une ID" });
  }
  const sql = "SELECT * FROM users WHERE idUser = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({
        message: "Erreur lors de la récupération de l'utilisateur",
        erreur: err,
      });
    }
    if (result.length === 0) {
      return res.json({ message: "Utilisateur non trouvé" });
    }
    return res.json({ data: result[0] });
  });
});

// Ajouter un utilisateur
app.post("/users", (req, res) => {
  const sql = "INSERT INTO users (firstname, lastname) VALUES (?)";
  const valeur = [req.body.firstname, req.body.lastname];
  db.query(sql, [valeur], (err, result) => {
    if (err) {
      return res.json({
        message: "Erreur lors de l'ajout de l'utilisateur",
        erreur: err,
      });
    }
    return res.json({
      message: `L'utilisateur ${req.body.firstname} ${req.body.lastname} a été ajouté(e) avec succès`,
    });
  });
});

app.listen(5001, (err) => {
  if (err) {
    console.log(`Une erreur s'est produite: ${err}`);
  } else {
    console.log("Le serveur est lancé au http://localhost:5001/");
  }
});
