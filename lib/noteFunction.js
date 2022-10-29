const fs = require('fs');
const path = require('path');

function createNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({note: noteArray}, null, 2)
    );
    return note;
}

module.exports = {
    createNote
};