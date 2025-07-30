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



















































// function multiplication(a, b) {
//   return a*b;
// }

// const addition = (a, b) => {
//   return a + b;
// }



// addition(5, 4);

// multiplication(4, 4);
















// import express from "express";
// import { config } from "dotenv";

// config();
// const PORT = process.env.PORT || 3001;
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Bienvenue sur notre API ", utilisateurs);
// });

// app.get("/users", (req, res) => {
//   const utilisateurs = [
//     {
//       nom: "Mirco",
//       postNom: "Rubambura",
//       adresse: "123 Maison, Bukavu",
//       numeroTelephone: "+243987654321",
//       email: "mircorubambura4@gmail.com",
//     },
//     {
//       nom: "Isaac",
//       postNom: "Akonkwa",
//       adresse: "456 Avenue Lumumba, Lubumbashi",
//       numeroTelephone: "+243 822 456 789",
//       email: "isaac.akonkwa@example.com",
//     },
//     {
//       nom: "Tshibanda",
//       postNom: "Kalala",
//       adresse: "789 Boulevard Kabila, Goma",
//       numeroTelephone: "+243 832 567 890",
//       email: "tshibanda.kalala@example.com",
//     },
//   ];
//   const nomsPostNoms = utilisateurs.map((utilisateur) => ({
//     nom: utilisateur.nom,
//     postNom: utilisateur.postNom,
//   }));
//   res.json({ nombre: utilisateurs.length, utilisateurs: nomsPostNoms });
// });

// app.listen(PORT, (err) => {
//   if (err) {
//     console.log(`Une erreur s'est produite: ${err}`);
//   } else {
//     console.log(`Le serveur est lancé au http://localhost:${PORT}/`);
//   }
// });

// export default app;
