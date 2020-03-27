const express = require('express');
const cors = require('cors'); //importanto funcionalidades do express pro projeto
const routes  =require('./routes'); // ./ indica q e um arquivo e não um pacote
//criando variavel  = const (nome da variavel)

const app = express();

app.use(cors()); // permite que as aplicações front acessem nossa API

// para informar que vamos usar o formato JSON para o corpo das requisições

app.use(express.json());

app.use(routes);

app.listen(3333);




