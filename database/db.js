import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bibliotheque",
});

db.connect((err) => {
  if (err) {
    console.log(`Erreur de connexion à la base de données ${err}`);
  } else {
    console.log("Base de données connectée avec succès");
  }
});

export default db;
