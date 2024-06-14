// fs writing


const content = "writing that hey, I'm Karthikeyan..! I'm learning node js.";

// Asynchronous Writing:
const fs = require('fs');

fs.writeFile('5. Working with file systems (read-write files)/example.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written');
});


// Synchronous Writing:
const fs1 = require('fs');

try {
    fs1.writeFileSync('5. Working with file systems (read-write files)/example.txt', content);
    console.log('File has been written');
} catch (err) {
    console.error(err);
}