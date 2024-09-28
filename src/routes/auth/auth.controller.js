const log = require("../../utils/logger");
const responseType = require("../../utils/responseType");
const service = require("./auth.service");

class controller {
  async login(payload) {
    try {
      const result = await service.login(payload);

      return result;
    } catch (error) {
      log.error(error.message, "Something went wrong!");
      return responseType("ERROR", "0", "Error", error.message, 500);
    }
  }
}

module.exports = new controller();
