const express = require("express");
const routes = express.Router();

const newsController = require('../controller/Newscontroller');

// routes.use('/:slug',newsController.show);

routes.use('/',newsController.index);

module.exports = routes;