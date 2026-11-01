const express = require("express");
const app = express();
const port = 3030;

// 1. Página inicial – Rota /
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Catálogo de Heróis</title>
    </head>
    <body>
        <h1>Catálogo de Heróis</h1>
        <p>Bem-vindo ao catálogo oficial de heróis da Marvel e DC!</p>
        <a href="/marvel">Ver Universo Marvel</a> | <a href="/dc">Ver Universo DC</a>
        <hr>
        <h3>Acesso Rápido aos Personagens:</h3>
        <ul>
            <li><a href="/personagem/marvel/Thor">Thor</a></li>
            <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
            <li><a href="/personagem/dc/Batman">Batman</a></li>
            <li><a href="/personagem/dc/Mulher-Maravilha">Mulher-Maravilha</a></li>
        </ul>
    </body>
    </html>
  `);
});

// 2. Rotas das empresas (/marvel e /dc)
app.get("/marvel", (req, res) => {
  res.send(`
    <h1>Marvel</h1>
    <p>O universo de heróis da Marvel, lar dos Vingadores e Mutantes.</p>
    <ul>
        <li><a href="/personagem/marvel/Thor">Thor</a></li>
        <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
    </ul>
    <br>
    <a href="/">Voltar à página inicial</a>
  `);
});

app.get("/dc", (req, res) => {
  res.send(`
    <h1>DC Comics</h1>
    <p>O panteão de heróis da DC, focado na Liga da Justiça.</p>
    <ul>
        <li><a href="/personagem/dc/Batman">Batman</a></li>
        <li><a href="/personagem/dc/Mulher-Maravilha">Mulher-Maravilha</a></li>
    </ul>
    <br>
    <a href="/">Voltar à página inicial</a>
  `);
});

// 3. Rota com dois parâmetros obrigatórios (/personagem/:empresa/:nome)
app.get("/personagem/:empresa/:nome", (req, res) => {
  const { empresa, nome } = req.params;

  res.send(`
    <h1>Perfil do Personagem</h1>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Universo/Empresa:</strong> ${empresa.toUpperCase()}</p>
    <br>
    <a href="/">Voltar à página inicial</a>
  `);
});

// Inicia o servidor na porta 3030
app.listen(port, () => {
  console.log(`Servidor disponível em http://localhost:${port}`);
});
