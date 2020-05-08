var express = require('express');
var router = express.Router();
var request = require('sync-request');
var wishListModel = require('../models/wishList');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET recupere les film du webservice. */
router.get('/new-movies', function(req, res, next) {

  var result = request("GET", "https://api.themoviedb.org/3/discover/movie?api_key=77b048a02db00309b968560ae8b2edd8&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&append_to_response=images&include_image_language=fr,null");
  result = JSON.parse(result.getBody());
  //console.log(result);

  res.json({ result });
});

/* Enregistre un film en base de donner */
router.post('/wishlist-movie', async function(req, res, next) {

  var newMovie = new wishListModel({
    title: req.body.movieName,
    poster_url: 'https://image.tmdb.org/t/p/w500'+req.body.poster_url
  });
  var moviesaved = await newMovie.save();
  //console.log(moviesaved);

  //var wishList = await wishListModel.find();
  res.json({ moviesaved });
});

/* supprime un film en base de donner */
router.delete('/wishlist-movie-delete', async function(req, res, next) {

  var result = false;
  if(result == false){
    var wishList = await wishListModel.deleteOne({_id: req.query.id});
    result = true;
  }

  res.json({ result });
});

/* on liste les films de la base de donner */
router.get('/wishlist-movie-list', async function(req, res, next) {

  var wishList = await wishListModel.find();
  res.json({ wishList });
});



module.exports = router;
