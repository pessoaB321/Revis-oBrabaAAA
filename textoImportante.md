Só para lembrar

01 No terminal

npm init -y

isso aqui faz o download dos arquivos npm 
(package.jsone e bla bla bla)

npm install express express-handlebars sequelize sqlite3

isso instala o express, handlebars, sequelize e sqlite3

02 

Para fazer a parte da conexão com o banco de dados é 
preciso criar a s pastas de cada componente

models - sqlite 3 ou seja banco de dados
routes - sequelize (quem conecta o bigode com o golfinho) 
views handlebars (parte visual lol)
config - bd.js (sei la)

no bd.js é nescessario colocar esse codigo aqui

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './bd.sqlite'
});

module.exports = sequelize;

e no app.js
     
const express = require('express');
const app = express();
const sequelize = require('./config/bd');

app.get('/', (req, res) => {
  res.send('a');
});

app.listen(
    3000, 
    () => console.log(`bxecução`)
);
async function conectarBD() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar:', erro);
  }
}

conectarBD();