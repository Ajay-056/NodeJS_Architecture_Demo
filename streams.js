const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 3 : Using pipe() with stream to avoid backpressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen("8000", () => {
  console.log("Server listening...");
});
