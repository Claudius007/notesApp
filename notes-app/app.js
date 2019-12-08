// wire up read command

// *setup --title option for read command
// *create readNote in notes.js
//   -search for note by title
//   -find note and print title (styled) and body (plain)
//   -no note found? print error in red
// *have the command handler call the function
// *test your work by running a couple commands

const log = console.log;
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//Customize yargs method
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },

    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//customize remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});
yargs.command({
  command: "read",
  describe: "Read from a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.readNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List note",
  handler: function() {
    notes.listNotes();
  }
});
yargs.parse();
