import express from "express";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

const users = [
  {
    id: "1",
    nom: "Isaac",
    postNom: "Akonkwa",
  },
  {
    id: "2",
    nom: "Wani",
    postNom: "OKULILI",
  }
]

app.get("/", (req, res)=>{
  res.send('Bienvenue dans notre API');
})

app.get("/users", (req, res)=>{
  res.json({data: users})
})

app.get("/users/:id", (req, res)=>{
  const {id} = req.params;

  if (!id) {
    return res.json({message: "Vous devez entrez une ID"})
  }
  const user = users.find((u) => u.id === id);
  

  if(!user){
    return res.json({message: "Utilisateur non trouvé"})
  }

  return res.json({data: user})
})

app.listen(5001, (err)=>{
  if (err) {
    console.log(`Une erreur s'est produite: ${err}`);
  } else {
    console.log("Le serveur est lancé au http://localhost:5001/");
  }
})