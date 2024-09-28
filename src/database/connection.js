const mongoose = require("mongoose");
const process = require("process");
const log = require("../utils/logger");

async function main() {
  const DB = process.env.MONGO_URL;
  try {
    await mongoose.connect(DB);
    log.info("Connection Successfully");
  } catch (error) {
    log.error(error, "Connection Error");
  }
}

module.exports = main;
