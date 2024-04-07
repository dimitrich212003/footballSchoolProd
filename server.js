const express = require("express");
const path = require("path");

const app = express();

// Обработка статических файлов из директорий img, css и js
app.use("/img", express.static(path.join(__dirname, "public/img")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));

const paths = {
  "/": "home.html",
  "/contacts": "contacts.html",
  "/gallery": "gallery.html",
  "/ourCoaches": "ourCoaches.html",
  "/trainingMethods": "trainingMethods.html",
};

Object.keys(paths).forEach((key) => {
  app.get(key, (req, res) => {
    res.sendFile(path.join(__dirname, paths[key]));
  });
});

const PORT = 3000;
const HOST = "localhost";

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} at http://${HOST}:${PORT}/`);
});
