const express = require("express");
const engine = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
// HTTP logger
app.use(morgan('combined'));
// Template engine
app.engine('hbs', engine.engine({
	extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// Routes
routes(app);

app.listen(port, () => {
	console.log(`Exampless app listening on port ${port}`);
});
