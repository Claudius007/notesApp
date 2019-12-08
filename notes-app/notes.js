const log = console.log;
const fs = require("fs");
const chalk = require("chalk");

const getNotes = function(note) {
  return "Your notes...";
};

const readNote = title => {
  const notes = loadNotes();
  const displayNotes = notes.find(note => {
    if (note.title === title) {
      log(note.body);
    }
  });
};

const listNotes = () => {
  const notes = loadNotes();
  log(chalk.green("Your notes..."));
  notes.forEach(note => {
    log(note.title);
  });
};

const removeNote = title => {
  const notes = loadNotes();
  function selectNoteToRemove(note) {
    return note.title !== title;
  }
  const noteToSave = notes.filter(selectNoteToRemove);
  if (noteToSave.length < notes.length) {
    saveNotes(noteToSave);
    log(chalk.green.inverse("note removed: ", title));
  } else {
    log(chalk.red.inverse("note title does not exist"));
  }
};

const addNote = function(title, body) {
  const notes = loadNotes();
  //callback function for filter to transverse through notes []
  function checkNotes(note) {
    return note.title === title;
  }
  const duplicateNotes = notes.filter(checkNotes);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    log(chalk.green.inverse("new notes added!"));
  } else {
    log(chalk.red.inverse("note title is taken"));
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  readNote: readNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
};
