const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 2 : Using Streams
  const readable = fs.createReadStream("test-file.txt");
  readable.on("data", (chunk) => {
    res.write(chunk); //This is a write stream by default
  });
  readable.on("end", () => {
    res.end();
  });
});

server.listen("8000", () => {
  console.log("Server listening...");
});
