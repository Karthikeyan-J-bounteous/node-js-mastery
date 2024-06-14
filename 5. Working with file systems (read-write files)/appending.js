// appending to a file


const additionalContent = "\nI'm software Analyst";


// Asynchronous Appending
const fs = require('fs');

fs.appendFile('5. Working with file systems (read-write files)/example.txt', additionalContent, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Content has been appended');
});


// Synchronous Appending
const fs1 = require('fs');

try {
    fs1.appendFileSync('5. Working with file systems (read-write files)/example.txt', additionalContent);
    console.log('Content has been appended');
} catch (err) {
    console.error(err);
}