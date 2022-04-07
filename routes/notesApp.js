var express = require('express');
var router = express.Router();

var savedNotes = require('../database/savedNotes.json');
var NoteModel = require('../models/note.js');

var emptySavedNotes = savedNotes.notes;
console.log(emptySavedNotes);

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var noteModel1 = new NoteModel({title: 'mynote1_title'});

  res.render('notesApp/homePage', { title: 'Notes Homepage'} );
});

module.exports = router;
