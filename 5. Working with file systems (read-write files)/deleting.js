// delete files using unlink or unlinkSync

// Asynchronous Deletion:

const fs = require('fs');

fs.unlink('5. Working with file systems (read-write files)/example.txt', err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been deleted');
});

// Synchronous Deletion:

const fs1 = require('fs');

try {
    fs1.unlinkSync('5. Working with file systems (read-write files)/example.txt');
    console.log('File has been deleted');
} catch (err) {
    console.error(err);
}