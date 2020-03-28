# Omnistack 11

## 1ª Aula

### Back-end

* Regras de negócio;
* Conexão banco de dados;
* Envio de e-mail;
* Comunicação com webservices;
* Autenticação do usuário;
* Criptografia e segurança;

API Restfull - API que segue determinadas regras/padrões.

Para iniciar a criação de um projeto Node.JS digite no terminal: `npm init -y`

Esso comando vai criar um arquivo chamado `package.json` que irá armazenar algumas informações importantes sobre o projeto e suas dependências.

Framework: é uma ferramenta/biblioteca que fornece um conjunto de funcionalidades.

O Express é um framework para tratar das rotas em um site. Para instalar: `npm install express`. 

A pasta `node_modules` armazena o código fonte das dependências que foram instaladas no projeto (tendo em vista que as dependencias podem ter dependencias também).

O arquivo `package-lock.json`  é um arquivo gerado automaticamente e contém algumas informações de cache.

Criar um arquivo `index.js`, será o arquivo principal da aplicação. Todo o código da aplicação vai partir desse arquivo.

Para executar a aplicação digite no terminal `node index.js`.



### React

**Abordagem tradicional:** A cada requisição, o servidor retorna o conteúdo completo da página, contendo todo o HTML e CSS. Essa abordagem limita o front-end para browser já que o aplicativo mobile ou serviços externos não vão conseguir interpretar o HTML.

Pesquisar - Template Engine

**Abordagem SPA (Single-Page Applications):** As requisições trazem apenas dados como respostas e, com esses dados, o front-end pode preencher as informações em tela. A página nunca recarrega, otimizando a performance e dando vida ao conceito de SPA. Retornado apenas JSON podemos ter quantos front-ends quisermos.

npx executa um pacote externo se a necessidade de intalá-lo (essa ferramenta foi instalada junto com o npm).

Criando uma aplicação em React: `npx create-react-app frontend`

Para rodar o projeto em React usamos o comando `npm start`.



### React Native

**Abordagem tradicional:** Criamos uma aplicação para iOS e outra para Android, e nesses casos, o trabalho se torna repetido tanto para a criação quanto para as alterações no projeto.

**Abordagem do React Native:** Todo o código é feito em JavaScript, esse código não é convertido em código nativo, melhor do que isso, o dispositivo passa a entender o código JavaScript e a Interface gerada é totalmente nativa.



## Aula 2

A rota, no backend é o conjunto completo: `localhost:3333/users`. O recurso seria `/users`, por exemplo.

### Métodos HTTP

A rota é acessível através do `app.get() `(método get).

GET: Buscar uma informação do back-end

POST: Criar uma informação no back-end

PUT: Alterar uma informação no back-end

DELETE: Deletar uma informação no back-end

 ### Tipos de Parâmetros

Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação) Exemplo: `localhost:3333/users?name=Lucas`

Para acessar o parâmetro use `const params = request.query`.

Route Params: Parâmetros utilizados para identificar recursos. Exemplo: `localhost:3333/users/:id`

Para acessar o parâmetro use `const params = request.params`.

Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.

Nodemon é uma ferramenta que a cada vez que um arquivo for salvo ele reinicia o servidor automaticamente. Para instalar: `npm install nodemon -D`  (O -D significa que é uma dependencia de desenvolvimento). Para executar: `npm nodemon index.js`. Ou crie um script em `package.json`: `"start": "nodemon index.js"`.

### Bancos de Dados

SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server

NoSQL: MongoDB, CouchDB, etc

Driver: SELECT * FROM users

Query Builder: table('users').select('*')

KNEX é o Query Builder mais famoso para Node.

http://knexjs.org/

Use `npx knex init` para iniciar o Knex

Entidade: tudo aquilo que representa lago que será salvo no banco de dados

Pesquisar: HTTP Status Code