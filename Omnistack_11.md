# Omnistack 11

## 1ª Aula

## Back-end

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

 ## React

**Abordagem tradicional:** A cada requisição, o servidor retorna o conteúdo completo da página, contendo todo o HTML e CSS. Essa abordagem limita o front-end para browser já que o aplicativo mobile ou serviços externos não vão conseguir interpretar o HTML.

Pesquisar - Template Engine

**Abordagem SPA (Single-Page Applications):** As requisições trazem apenas dados como respostas e, com esses dados, o front-end pode preencher as informações em tela. A página nunca recarrega, otimizando a performance e dando vida ao conceito de SPA. Retornado apenas JSON podemos ter quantos front-ends quisermos.

npx executa um pacote externo se a necessidade de intalá-lo (essa ferramenta foi instalada junto com o npm).

Criando uma aplicação em React: `npx create-react-app frontend`



58:12