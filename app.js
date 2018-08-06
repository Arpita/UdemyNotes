const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const title = {
		describe: 'Title for the note',
		demand: true,
		alias: 't'
	};

const body = {
		describe: 'Body for the title',
		demand: true,
		alias: 'b'
	};


const argv = yargs
	.command('add', 'Add a new note', {
		title,
		body 
	})
	.command('list', 'List all the notes')
	.command('read', 'Reads an individual note', {
		title
	})
	.command('remove', 'Deletes a note', {
		title
	})
	.help()
	.argv;
//var command = process.argv[2];
var command = argv._[0];

if (command == 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('New note added');
		notes.logNote(note);
	} else
		console.log('Note title already in use');
} else if (command == 'list') {
	var allNotes = notes.listNotes();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
} else if (command == 'remove') {
	notes.removeNote(argv.title) ? console.log('Note removed successfully') : console.log('No note was removed');
} else if (command == 'read') {
	var note = notes.getNote(argv.title);
	if (note)
		notes.logNote(note);
	else
		console.log('Note not found');
} else {
	console.log('Command not recognized');
}

