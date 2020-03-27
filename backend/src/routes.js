
const express = require('express');
const crypto = require('crypto');

const ongcontroller = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const ProfilleController = require ('./controllers/ProfilleControler');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();




routes.get('/ongs',ongcontroller.index);
routes.post('/ongs',ongcontroller.create);


routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);
routes.get('/profile',ProfilleController.index);
routes.post('/session',SessionController.create);

module.exports = routes;
 