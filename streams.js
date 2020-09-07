const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 1 : Without using streams
  fs.readFile("test-file.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
});

server.listen("8000", () => {
  console.log("Server listening...");
});
