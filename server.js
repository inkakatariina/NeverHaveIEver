// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Palvele index.html ja muut tiedostot
app.use(express.static(path.join(__dirname)));

// Kun joku liittyy peliin
io.on("connection", (socket) => {
  console.log("Uusi pelaaja liittyi: " + socket.id);

  // Lähetä kysymys kaikille
  socket.on("getQuestion", () => {
    const question = "I have never lied to a teacher 😅";
    io.emit("newQuestion", question);
  });

  // Vastauksen vastaanotto
  socket.on("answer", (data) => {
    console.log(`Vastaus saatu: ${data} pelaajalta ${socket.id}`);
  });

  socket.on("disconnect", () => {
    console.log("Pelaaja poistui: " + socket.id);
  });
});

// Käynnistä palvelin
const PORT = 8080;
server.listen(PORT, () => {
  console.log("Palvelin käynnissä portissa " + PORT);
});
