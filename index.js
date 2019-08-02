const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  return res.json({ hello: "world 2!" });
});

//Fazer a API escutar na porta 3000
app.listen(3000);
