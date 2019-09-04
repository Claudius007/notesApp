const log = console.log
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//const command = process.argv
//log (command)

//Customize yargs method
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        
        body: {
            describe: 'Note Body', 
            demandOption: true,
            type: 'string'
        }
    },

    handler: function(argv) {

        notes.addNote(argv.title, argv.body)
        // log ('Title: '+argv.title);
        // log ('Body: '+argv.body);
    }
})

    //customize remove command
    yargs.command({
        command:'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Notes Title',
                demandOption:true,
                type: 'string'
            }
            

        },
           
        handler: function(argv){
            notes.removeNote(argv.title)
    
        //log ('Removing note..');
        }
})
    yargs.command ({
        command:'read',
        describe: 'Read from a note',
        handler: function(){
            log('Reading from note');
        }
    })

    yargs.command ({
        command: 'list',
        describe: 'List note',
        handler: function(){
            log('Listing from note');
        }
    })
yargs.parse()








// if (command === 'add'){
//     log('Adding note!')
// }
// else if(command === 'remove'){
//     log('Removing note!')
// }





// const log = console.log
// const validator = require('validator')

// const msg = getNotes()

// log(msg);

// log(validator.isURL('https://carehop'))

// log (chalk.bold.inverse.red('Success!'))

// log(chalk.inverse.underline('Wawuuu'))
// const add = require('./utils.js')

// const sum = add(4,4)

// console.log(sum);