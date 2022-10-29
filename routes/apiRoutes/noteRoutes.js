const router = require('express').Router();
const fs = require("fs")
const { createNote } = require('../../lib/noteFunction');
let db = require('../../db/db.json');
router.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(db)
});

router.post('/notes', (req, res) => {
    const note = {...req.body,id:Math.floor(Math.random()*999)}
    db.push(note);
    fs.writeFileSync('./db/db.json',
        JSON.stringify(db, null, 2));
   res.json(db)
})


module.exports = router;