const http = require("http");
const app = require("./src/app");
const log = require("./src/utils/logger");
const process = require("process");

// Create the server
const server = http.createServer(app);

// Start the server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  log.info(`Server is running on port http://localhost:${PORT}`);
});