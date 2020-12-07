<h1 align="center">Buscador de Cep 🇧🇷<h1>

<p align="center">
<img alt="mapa-brasil" src="https://image.flaticon.com/icons/png/512/47/47442.png" width="100"/>
</p>

<h2 align="center">
Teste técnico da empresa <a href="https://jobs.kenoby.com/vagascometa">Cometa</a>
</h2>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Asrlopes/teste-analista">

  <a href="https://www.linkedin.com/in/amor%C3%A9sio-de-souza-429ba314b/">
    <img alt="Made by" src="https://img.shields.io/badge/Feito%20por-Amor%C3%A9sio%20de%20Souza-blue">
  </a>

  <img alt="tamanho size" src="https://img.shields.io/github/repo-size/Asrlopes/teste-analista">

</p>

<p align="center">
  <a href="##sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="##tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="##começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="##extra">Extra</a>
</p>

## 📖 Sobre o projeto

O buscador de cep foi construido com o intuito ser um teste técnico para a empresa [Cometa](https://jobs.kenoby.com/vagascometa).

### 🙅🏽‍♂️ Requisitos obrigatórios

- A aplicação deverá consumir os dados da API aberta [Via Cep](https://viacep.com.br/).
- Deve haver tratamento dos erros, por exemplo, conexão com a API e dados inválidos.

- O código da aplicação e as instruções para instalação e execução devem estar presentes em um repositório público no GitHub.

- A aplicação deve permitir a consulta de CEP pelo número.

- A aplicação deve permitir a consulta de CEP pela sigla do estado e cidade, exemplo MT Cáceres

## Tecnologias

- ##### [ReactJS](https://pt-br.reactjs.org/)
- ##### [Axios](https://github.com/axios/axios)
- ##### [Lottie](https://github.com/chenqingspring/react-lottie)
- ##### [React spring](https://www.react-spring.io/)
- ##### [Polished](https://github.com/styled-components/polished)
- ##### [Styled components](https://styled-components.com/)
- ##### [React Icons](https://react-icons.netlify.com/#/)
- ##### [UnForm](https://unform.dev/)
- ##### [Yup](https://github.com/jquense/yup)
- ##### [Eslint](https://eslint.org/)
- ##### [Prettier](https://prettier.io/)
- ##### [EditorConfig](https://editorconfig.org/)

## 💻 Começando

### Requisitos

Ter o `Yarn` ou o `NPM`instalados.

### Primeiro passo

Em um diretório de sua preferência rode o comando:
`git clone https://github.com/Asrlopes/teste-analista.git`

Abra a pasta do projeto e digite.

#### `yarn install` ou `npm install`

Após intalar todas as dependencias, dentro do terminal do projeto rode o comando.

#### `yarn start ou `npm start`

Roda o app em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

#### Ou simplemente acessar a [Página online](https://gifted-bhabha-cef33d.netlify.app/) do projeto.

## Extra

#### Sobre os Requisitos.

- A aplicação deverá consumir os dados da API aberta [Via Cep](https://viacep.com.br/).
- Deve haver tratamento dos erros, por exemplo, conexão com a API e dados inválidos. ✅

- O código da aplicação e as instruções para instalação e execução devem estar presentes em um repositório público no GitHub. ✅

- A aplicação deve permitir a consulta de CEP pelo número. ✅

##### Explicação

- A aplicação deve permitir a consulta de CEP pela sigla do estado e cidade, exemplo MT Cáceres ✅ ❗️

De acordo com a API do [Via Cep](https://viacep.com.br/), existe dois métodos de busca, por numero de cep e por UF/Cidade/Logradouro, como algumas cidades do Brasil possuem apenas 1 cep, a busca não necessita de logradouro, exemplo (Chapada dos guimarães e Mirassol D'Oeste ).
Cidades maiores como cáceres que possuem 1 cep por rua é necessário identificar um logradouro para a busca.
