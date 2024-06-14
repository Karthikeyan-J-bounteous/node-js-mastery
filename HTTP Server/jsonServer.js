// jsonResponse.js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/data") {
    fs.readFile("HTTP Server/data.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end("Server Error");
        return;
      }

      try {
        const jsonData = JSON.parse(data);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jsonData));
      } catch (parseErr) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Error parsing JSON" }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
}
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
