const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public")); // создаем промежуточное ПО(это функционал, который встраивается в любую функцию экспресса) тут лежат статические файлы

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(path.join(__dirname, "contacts.html"));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "gallery.html"));
});

app.get("/ourCoaches", (req, res) => {
  res.sendFile(path.join(__dirname, "ourCoaches.html"));
});

app.get("/trainingMethods", (req, res) => {
  res.sendFile(path.join(__dirname, "trainingMethods.html"));
});

const PORT = 3001;
const HOST = "localhost";

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} at http://${HOST}:${PORT}/`);
});
