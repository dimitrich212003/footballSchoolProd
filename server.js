const express = require("express");
const { request } = require("http");
const path = require("path");

const app = express();

app.use(express.static("public")); // создаем промежуточное ПО(это функционал, который встраивается в любую функцию экспресса) тут лежат статические файлы

const paths = {
  "/": "home.html",
  "/contacts": "contacts.html",
  "/gallery": "gallery.html",
  "/ourCoaches": "ourCoaches.html",
  "/trainingMethods": "trainingMethods.html"
};

Object.keys(paths).forEach((key) => {
  app.get(key, (req, res) => {
      res.sendFile(path.join(__dirname, paths[key]))
  });
});

const PORT = 80;
const HOST = "94.250.249.248";

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} at http://${HOST}:${PORT}/`);
});
