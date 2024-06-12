const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.end('<html><body><h1>Home Page</h1></body></html>');
  } else if (req.url === '/about') {
    res.end('<html><body><h1>About Page</h1></body></html>');
  } else {
    res.statusCode = 404;
    res.end('<html><body><h1>404 Not Found</h1></body></html>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
