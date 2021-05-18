const color = "green";

// console.log(`hello world and the color is ${color}`);

// document.getElementById("id"); // nera tokio objekto

// node app.js // paleidziam js faila su node ir gaunam out put
// isikeliam failu sistemo moduli

const fs = require("fs");
// sukurti failus
fs.writeFile("user1.txt", "username=jane", (err) => {
  if (err) {
    console.log(" err", err);
  } else {
    console.log("irasytas failas");
  }
});

// nuskaitayti failus
