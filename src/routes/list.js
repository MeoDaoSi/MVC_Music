const express = require("express");
const routes = express.Router();

const Listscontroller = require('../controller/Listcontroller');

routes.get('/:slug',Listscontroller.show);

module.exports = routes;