var mongoose = require('./bdd');

var wishListSchema = mongoose.Schema({
    title: String,
    poster_url: String
});

var wishListModel = mongoose.model('wishList', wishListSchema);

module.exports = wishListModel;