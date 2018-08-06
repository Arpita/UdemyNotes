// var obj = {
// 	name: 'Kiki'
// };

// var stringObj = JSON.stringify(obj);

// var personString = '{"name": "Kiki", "age": 22}';

// var person = JSON.parse(personString);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);