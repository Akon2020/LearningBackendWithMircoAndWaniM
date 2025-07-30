import { Router } from "express";
import {
  getAllAuteurs,
  getSingleAuteur,
  createAuteur,
  updateAuteur,
  deleteAuteur,
} from "../controllers/auteur.controller.js";

const auteurRouter = Router();

auteurRouter.get("/", getAllAuteurs);
auteurRouter.get("/:id", getSingleAuteur);

auteurRouter.post("/", createAuteur);

auteurRouter.put("/:id", updateAuteur);

auteurRouter.delete("/:id", deleteAuteur);

export default auteurRouter;
