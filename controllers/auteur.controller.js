import db from "../database/db.js";

export const getAllAuteurs = async (req, res) => {
  const sql = "SELECT * FROM auteurs";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({
        message: "Erreur lors de la récupération des auteurs",
        erreur: err,
      });
    }
    return res.json({ nombre: result.length, data: result });
  });
};

export const getSingleAuteur = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ message: "Vous devez entrer une ID" });
  }
  const sql = "SELECT * FROM auteurs WHERE idAuteur = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({
        message: "Erreur lors de la récupération de l'auteur",
        erreur: err,
      });
    }
    if (result.length === 0) {
      return res.json({ message: "Auteur non trouvé" });
    }
    return res.json({ data: result[0] });
  });
};

export const createAuteur = async (req, res) => {
  const { nom, biographie } = req.body;
  const aut = "SELECT * FROM auteurs";
  const sql = "INSERT INTO auteurs (nom, biographie) VALUES (?)";
  db.query(aut, (err, result) => {
    if (err) {
      return res.json({
        message: "Erreur lors de la récupération des auteurs",
        erreur: err,
      });
    }
    for (let i = 0; i < result.length; i++) {
      const auteur = result[i];
      if (nom === auteur.nom) {
        return res.json({
          message: `Erreur! L'auteur ${nom} existe déjà dans notre système`,
        });
      }
    }
    db.query(sql, [nom, biographie], (err, result) => {
      if (err) {
        return res.json({
          message: "Erreur lors de l'ajout de l'auteur",
          erreur: err,
        });
      }
      return res.json({
        message: `L'auteur ${req.body.nom} a été ajouté(e) avec succès`,
      });
    });
  });
};

export const updateAuteur = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ message: "Vous devez entrer une ID" });
  }
  const sql = "UPDATE auteurs SET nom = ?, biographie = ? WHERE idAuteur = ?";
  const valeur = [req.body.nom, req.body.biographie, id];
  db.query(sql, valeur, (err, result) => {
    if (err) {
      return res.json({
        message: "Erreur lors de la mise à jour de l'auteur",
        erreur: err,
      });
    }
    if (result.affectedRows === 0) {
      return res.json({
        message: `L'auteur portant l'ID ${id} n'existe pas dans notre sysème`,
      });
    }
    return res.json({
      message: `L'auteur ${req.body.nom} a été mis à jour avec succès`,
    });
  });
};

export const deleteAuteur = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ message: "Vous devez entrer une ID" });
  }
  const sql = "DELETE FROM auteurs WHERE idAuteur = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({
        message: "Erreur lors de la suppression de l'auteur",
        erreur: err,
      });
    }
    return res.json({
      message: `L'auteur avec l'ID ${id} a été supprimé avec succès`,
    });
  });
};
