const pino = require("pino");
const process = require("process");

const isProd = process.env.NODE_ENV === "production";

let log;

if (isProd) {
  // In production, avoid pino-pretty (use JSON format)
  log = pino({
    level: "info", // Set your preferred log level for production
    base: null,
    timestamp: pino.stdTimeFunctions.isoTime,
  });
} else {
  // In development, use pino-pretty
  const transport = pino.transport({
    target: "pino-pretty",
    options: { colorize: true },
  });

  log = pino(
    {
      level: "debug",
      base: null,
      timestamp: pino.stdTimeFunctions.isoTime,
    },
    transport
  );
}

module.exports = log;
