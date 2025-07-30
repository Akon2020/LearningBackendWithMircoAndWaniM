import express from "express";
import cors from "cors";
import db from "./database/db.js";
import auteurRouter from "./routes/auteur.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue dans l'API de la bibliothèque" });
});

app.use("/api/auteurs", auteurRouter);

app.listen(5001, (err) => {
  if (err) {
    console.log(`Une erreur s'est produite: ${err}`);
  } else {
    console.log("Le serveur est lancé au http://localhost:5001/");
  }
});
