//importando o KNEX e o arquivo de configuração do banco
const knex = require('knex');
const configuration = require('../../knexfile');

//variavel de conexçao
const connection = knex(configuration.development);

//exportanto  a conexcao

module.exports = connection;
