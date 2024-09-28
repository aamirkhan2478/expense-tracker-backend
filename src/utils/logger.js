const pino = require("pino");

const transport = pino.transport({
  target: "pino-pretty",
  options: { colorize: true },
});

const log = pino(
  {
    level: "debug",
    base: null,
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  transport
);

module.exports = log;
