const pino = require("pino");
const process = require("process");

const isProd = process.env.NODE_ENV === "production";

const transport = pino.transport({
  target: "pino-pretty",
  options: { colorize: true },
});

const log = pino(
  isProd
    ? {}
    : {
        level: "debug",
        base: null,
        timestamp: pino.stdTimeFunctions.isoTime,
      },
  transport
);

module.exports = log;
