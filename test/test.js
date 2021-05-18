console.log("1 test");

// isikeliam failu sistemo moduli
const fs = require("fs");

fs.writeFile("user.txt", "username=Bob", (err) => {
  if (err) {
    console.log(" err", err);
  } else {
    console.log("irasytas failas");
  }
});
