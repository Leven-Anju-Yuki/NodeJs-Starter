// import des package necessaire
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
//Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Aficher hello Word
app.get("/", (req, res) => {
  res.send(`       <h2>en travaux</h2>
  <img src="https://res.cloudinary.com/dgrszi9wf/image/upload/v1701424796/image/traveaux.gif" alt="">
` );
});
//Lancement de serveur
const PORT = process.env.PORT || 5600;

//Definir une fonction pour lancer le serveur
const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Le serveur est lancé sur le port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
