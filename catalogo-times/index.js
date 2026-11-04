import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

const times = [
  { id: 1, nome: "Grêmio", estadio: "Arena do Grêmio", cidade: "Porto Alegre" },
  {
    id: 2,
    nome: "Internacional",
    estadio: "Beira-Rio",
    cidade: "Porto Alegre",
  },
  {
    id: 3,
    nome: "Juventude",
    estadio: "Alfredo Jaconi",
    cidade: "Caxias do Sul",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/times", (req, res) => {
  res.render("times", { times });
});

app.get("/times/:id", (req, res) => {
  const time = times.find((t) => t.id == req.params.id);

  if (!time) {
    return res.send("Time não encontrado");
  }

  res.render("detalhe", { time });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
