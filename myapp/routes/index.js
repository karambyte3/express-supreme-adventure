var express = require('express');
var router = express.Router();
var templateHelper = require('../helpers/templateHelper');
var apiData = require('../database/rickyMortyAPI.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

router.get('/Contact-Show', function(req, res) {
  var fileName = 'contact.hbs'
  var fileDir = `views/${fileName}`;

  var result = templateHelper.getRenderedTemplateString(fileDir, {});

  res.send(result);
});

router.get('/Gallery-Show', function(req, res) {
  var fileName = 'gallery.hbs'
  var fileDir = `views/${fileName}`;

  var result = templateHelper.getRenderedTemplateString(fileDir, apiData);

  res.send(result);
});

module.exports = router;
