const list = require("../models/song");
const { mutipleMongooseToObject } = require("../util/mongoose");
class ListController {
    show(req, res, next){
        list.findOne( { slug: req.params.slug })
            .then( song => {
                res.render("list/show");
            })
            .catch(next);
    }
}

module.exports = new ListController;