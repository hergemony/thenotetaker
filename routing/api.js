const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const res = require("express/lib/response");
const { v4 } = require("uuid");
const dbPath = path.join(__dirname, "..", "db", "db.json");

function getNotes() {
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

router.get("/api/notes", (req, res) => {
  res.json(getNotes());
});
function saveNotesToDb(notes){

    fs.writeFileSync(dbPath, JSON.stringify(notes), 'utf8');
  }
  
router.post("/api/notes", (req, res) => {
  console.log(req.body);
  const { title, body } = req.body;
  const newNote = {
    id: v4(),
    // title: title.
    title, // same as above
    body: body,
  };

  const notes = getNotes();

  notes.push(newNote);

  saveNotesToDb(notes);

  res.json({
    data: "ok",
  });
});

router.delete('/api/notes/:id', (req, res) => {

    // get all the notes
    const notes = getNotes();
  
  
    // filter out the target note
    const result = notes.filter((note) => {
      return note.id !== req.params.id
    });
  
    // resave to db
    saveNotesToDb(result);
  
    res.json({
      data: 'ok',
    })
  
  })
  
// create a new note
// read the req body for the note title & text
// const title = req.body.title;
// const text = req.body.text;

// read the req body for the note title and text
// generate an ID to the new note
// save the new note to the end of the existing note

module.exports = router;
