// const express = require("express");
import express from 'express';
import engine from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
const __dirname = path.resolve();

// const morgan = require('morgan');

const app = express();

const port = 3000;

// HTTP logger
app.use(morgan('combined'));
// Template engine
app.engine('hbs', engine.engine({
	extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));

app.get("/", (req, res) => {
	res.render('home');
});
app.get("/news", (req, res) => {
	res.render('news');
});

app.listen(port, () => {
	console.log(`Exampless app listening on port ${port}`);
	console.log('hello');
});
