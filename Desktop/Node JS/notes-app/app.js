const fs = require('fs')

 //fs.writeFileSync('notes.txt', 'My name is Ranjitha.')

 //Challenge:Append a message to notes.txt
 //
 //1. USe appendFileSync to append to the file
 //2.Run the script
 //3. Check your work by opening the file and viewing

fs.appendFileSync('notes.txt', ' I live in Bangalore.')
