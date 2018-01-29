const net = require("net");
const strftime = require('strftime')

const server = net.createServer(socket => {
  // socket handling logic
  console.log("Socket Listening");

  socket.write(`${strftime('%F %H:%M', new Date(Date.now()))}\n`);

  socket.end();

  server.on("error", e => {
    if (e.code == "EADDRINUSE") {
      console.log("Address in use, retrying...");
      setTimeout(() => {
        server.close();
        server.listen(PORT, HOST);
      }, 1000);
    }
  });
});

const port = process.argv[2];
server.listen(port);
