# notesApp

npm packages : chalk, yargs

description: notesApp is a nodeJS console application that accepts input from the command prompt/terminal and displays output likewise. Data is stored and retrieved from a JSON file(notes.json). The application has four commands built with yargs, they are:

*Add (Add new note) - This requires title(i.e the title of the note) and body (the body of the note).
To run the add command : node app.js add --title='title of the note' --body='the body of the note'
*Remove (Remove a note) - This requires title(i.e the title of the note)
To run the remove command: node app.js remove --title='title of the note to remove'
*List (List all notes) - This does not require any console arguement and can be run without one.
To run the list command: node app.js list
*Read (Read from note) - This requires the title(title of the note that you will like to read).
To run this command: node app.js read --title='the title of the note to read from'

TODO:
\*Update (Update and existing note)
