const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notesData.json');
		return JSON.parse(notesString);
	} catch(e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notesData.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title: title,
		body // ES6 notation
	};

	// ensuring uniquness
	var duplicatNotes = notes.filter((note) => note.title === title); // ES6 if one statement then no need for curly braces
	if (duplicatNotes.length == 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var listNotes = () => {
	return fetchNotes();
};

var getNote = (title) => {
	var notes = fetchNotes();
	var filteredNote = notes.filter((note) => note.title === title);
	return filteredNote[0];
};

var removeNote = (title) => {
	var notes = fetchNotes();

	var filteredNotes = notes.filter((note) => note.title !== title);

	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
	// debugger;
	console.log('---');
	console.log('Title:', note.title);
	console.log('Body:', note.body);
};

module.exports = {
	addNote: addNote,
	listNotes, //ES6 way of specifying
	getNote,
	removeNote,
	logNote
};