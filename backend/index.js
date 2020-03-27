const express = require('express'); //Importando o módulo Express pra dentro da variável express

const app = express(); //Armazena a aplicação

app.get("/", (request, response) => {
    return response.json({
        evento: "OmniStack 11",
        aluno: "Lucas"
    });
});

app.listen(3333); //localhost:3333



