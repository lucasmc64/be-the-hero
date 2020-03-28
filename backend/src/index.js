const express = require('express'); //Importando o módulo Express pra dentro da variável express
const cors = require('cors');
const routes = require('./routes');

const app = express(); //Armazena a aplicação

app.use(cors());
app.use(express.json()); //Faz o express entender que as requisições estão no formato JSON
app.use(routes);

app.listen(3333); //localhost:3333



