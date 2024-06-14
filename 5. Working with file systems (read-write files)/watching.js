// To watch for changes in a file, you can use fs.watch.

const fs = require('fs');

fs.watch('5. Working with file systems (read-write files)/example.txt', (eventType, filename) => {
    if (filename) {
        console.log(`${filename} file Changed`);
    }
});