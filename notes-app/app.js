const yargs = require("yargs");
const notes = require("./notes.js");

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

//customize read command
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

//customize list command
yargs.command({
  command: "list",
  describe: "List note",
  handler: function() {
    notes.listNotes();
  }
});
yargs.parse();
