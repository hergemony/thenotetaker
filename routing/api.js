const express = require('express');
const path = require('path');
const router = express. Router();
const fs = require('fs');
const { V4MAPPED } = require('dns');
const res = require('express/lib/response');

const dbPath = path.join(__dirname, '..', 'db', 'db.json');

function getNotes(){
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));

}

router.get('/api/notes', (req,res) => {
    
    res.json(getNOtes())

});

router.post('/api/notes', (req, res) => {

    console.log(req.body);

}

// create a new note
// read the req body for the note title & text
// const title = req.body.title;
// const text = req.body.text;
const {title, body}= req.body;

// read the req body for the note title and text
// generate an ID to the new note
// save the new note to the end of the existing note

const newNote = {
    id: V4(),
    // title: title.
    title, // same as above
    body: body,
}

const notes = getNotes();

notes.push(newNote);

saveNotestoDb(notes);

res.json({
    data: 'ok',
})



module.exports = router;