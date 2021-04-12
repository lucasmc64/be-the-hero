![Be The Hero](readme-images/cover.png)

# Be The Hero :superhero:

*Esse foi um projeto desenvolvido durante a Semana OmniStack 11.0.*

## Objetivo :dart:

A princípio o projeto tem o intuito de ser um meio para ajudar instituições beneficentes locais, onde estas publicam um caso em que precisam de ajuda em busca de um herói para salvá-las.

## Alguns detalhes :scroll:

* O back end é construído com Node.JS e SQLite.
* O font end é construído com ReactJS.
* O mobile é construído com React Native auxiliado pelo Expo.

## Como rodar o projeto em minha máquina? :thinking:

O primeiro passo é clonar o projeto, seja via terminal ou GitHub Desktop, ou mesmo baixando o arqquivo compactado (.zip). Após isso, siga adiante.

### Requisitos :hammer_and_wrench:

* [Node.JS](https://nodejs.org/).
* (Opcional) [Yarn](https://yarnpkg.com/).

### Instalando dependências :mag:

Com o Node.JS instalado, acesse cada um dos diretórios (**backend**, **frontend** e **mobile**) via terminal e rode o comando `npm install`. Caso você prefira usar o Yarn, basta rodar o comando `yarn`.

### Rodando o Back end :goggles:

Acesse o diretório **backend** via terminal, rode o comando `npm start` ou `yarn start` e uma mensagem parecida com a seguinte aparecerá para você:

![Resultado do comando no terminal](readme-images/backend.png)

> Caso não tenha sido esse o resultado, verifique se os requisitos e os passos anteriores foram cumpridos.

### Rodando o Front end :sparkles:

Acesse o diretório **frontend** via terminal, execute `npm start` ou `yarn start`. Uma mensagem parecida com a seguinte aparecerá para você:

![Resultado do comando no terminal](readme-images/frontend.png)

Automaticamente, em seu navegador padrão, se abrirá uma aba para o link http://localhost:3000/ (onde o projeto estará rodando).

> Caso não tenha sido esse o resultado verifique que os requisitos e os passos anteriores tenham sido cumpridos.

### Rodando o Mobile :iphone:

#### Requisitos :hammer_and_wrench:

* Aplicativo Expo: ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) - [iOS](https://apps.apple.com/br/app/expo-client/id982107779)).
* [Expo Command Line](https://expo.io/learn).

#### Passos :hiking_boot:

Acesse o diretório **mobile** via terminal e execute `npm start` ou `yarn start`.

Em seguida, uma mensagem parecida com a seguinte aparecerá para você:

![Parte 1 - expo-cli terminal](readme-images/mobile.png)

Automaticamente, em seu navegador padrão, se abrirá uma aba para o link http://localhost:9002/ com a seguinte tela:

![Expo no navegador](readme-images/browser-expo.png)

Como vocês puderam reparar, há um QRCode tanto no terminal quanto no site que se abriu (ele são iguais). Agora, abra o aplicativo Expo em seu smartphone, escaneie o QRCode e aguarde até que o projeto seja sincronizado.

> Caso não tenha sido esse o resultado verifique que os requisitos e os passos anteriores tenham sido cumpridos.

### Se tudo deu certo... :tada:

Agora você está rodando o projeto lindamente!