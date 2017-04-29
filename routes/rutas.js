const express = require('express');

const Router = express.Router();

const main = require('.././controllers/main.js')


Router.get('/', main.init)
Router.get('/admin', main.admin)

Router.post('/create', main.create)


Router.get('/', main.init);

module.exports = Router;
