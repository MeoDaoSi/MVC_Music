const news = require("./news");
const home = require("./home");
const list = require("./list")

function routes(app){
    app.use('/news', news);
    app.use('/list',list);
    app.use("/", home);
    // app.get("/news", (req, res) => {
    //     res.render('news');
    // });
}

module.exports = routes;