const User = require("../../models/user.model");
const responseType = require("../../utils/responseType");

class service {
  async login(payload) {
    const { email, password } = payload;
    const user = await User.findOne({ email });

    if (!user) {
      return responseType("ERROR", "0", "Error", "User not found", 404);
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return responseType("ERROR", "0", "Error", "Invalid password", 400);
    }

    const token = user.generateToken();

    const userData = {
      name: user.name,
      email: user.email,
    };

    return responseType("SUCCESS", "1", "Success", { userData, token }, 200);
  }
}

module.exports = new service();
