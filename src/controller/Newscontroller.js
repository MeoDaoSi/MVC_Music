const song = require('../models/song');
const { mutipleMongooseToObject } = require('../util/mongoose');
class NewsController {
    // [GET] / news
    index(req, res, next) {
        song.find({})
            .then((songs) =>
                res.render('news', {
                    songs: mutipleMongooseToObject(songs),
                }),
            )
            .catch(next);
    }
    show(req, res) {
        res.send('show details');
    }
}

module.exports = new NewsController();
