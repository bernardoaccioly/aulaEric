const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindo ao servidor!!!!');
});

app.get('/sobre', (req, res) => {
  res.send('Atividade Eric, questão 2!');
});

app.get('/contato', (req, res) => {
  res.send('Atividade Eric, questão 2!');
});


app.get ('/3', (req, res) => {
  res.json({
  "email": "contato@email.com","telefone": "(81) 99999-9999"
});
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);