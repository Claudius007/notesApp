const log = console.log
const fs = require('fs')


const getNotes = function(){
    return 'Your notes...';
   
}
const removeNote = function(title){
    log( "note removed: ",title)

}
const addNote = function(title, body){
 const notes = loadNotes()
 const duplicatenotes = notes.filter(function(note){
     return note.title === title
 })

 if (duplicatenotes.length===0){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    log ("new notes added!")
 }  else{
     console.log ("note title is taken")
 }
 
//elog(notes)

}

const saveNotes = function(notes){
    const data_json =JSON.stringify(notes)
    fs.writeFileSync ('notes.json',data_json)
}


const loadNotes = function(){

    try{
    const data_buffer = fs.readFileSync('notes.json')
    const data_json = data_buffer.toString()
    return JSON.parse(data_json)

    }catch(e) {
            return[]
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}