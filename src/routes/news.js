const express = require('express');
const routes = express.Router();

const newsController = require('../controller/Newscontroller');

// routes.use('/:slug',newsController.show);

routes.get('/', newsController.index);

module.exports = routes;
