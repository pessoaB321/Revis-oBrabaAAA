
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