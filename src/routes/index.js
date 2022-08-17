const news = require("./news");

function routes(app){
    app.use('/news', news);
    app.get("/", (req, res) => {
        res.render('home');
    });
    // app.get("/news", (req, res) => {
    //     res.render('news');
    // });
}

module.exports = routes;