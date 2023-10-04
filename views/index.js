const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render("index"); // views/index.ejs
});

app.get("/exemplo", (request, response) => {
    console.log("Este log foi feito no servidor")
    response.render("teste21", {z: 'Cê loko!'}); // views/teste.ejs
});