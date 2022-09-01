const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
let results = [];
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send({ results }));

app.get("/number", (req, res) => {
  const min = 0;
  const max = 100;
  const randomNumber = Math.random() * (max - min) + min;
  res.send({ number: Math.floor(randomNumber) });
});

app.post("/", (req, res) => {
  const newValue = req.body;

  if (!newValue.name)
    return res.status(400).send("falta o nome de quem fez a operação");
  if (!newValue.expression)
    return res.status(400).send("falta a expressão feita");
  if (!newValue.result) return res.status(400).send("falta o resultado final");

  results.push(newValue);
  res.send({msg:'salvo com sucesso'})
});

app.listen(port, () => {
  console.log(`server http://localhost:${port}`);
});
