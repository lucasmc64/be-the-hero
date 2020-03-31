const express = require('express'); //Importando o módulo Express pra dentro da variável express
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express(); //Armazena a aplicação

app.use(cors());
app.use(express.json()); //Faz o express entender que as requisições estão no formato JSON
app.use(routes);
app.use(errors());

module.exports = app;

