// fs reading

// Asynchronous Reading:
const fs = require('fs');

fs.readFile('5. Working with file systems (read-write files)/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Asynchronous :", data);
});


// Synchronous Reading:
const fs1 = require('fs');

try {
    const data = fs1.readFileSync('5. Working with file systems (read-write files)/example.txt', 'utf8');
    console.log("Synchronous: ", data);
} catch (err) {
    console.error(err);
}