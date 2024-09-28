const express = require("express");
const router = express.Router();

//Routes
router.use("/auth", require("./auth"));
// router.use("/income", require("./income"));
// router.use("/expense", require("./expense"));
// router.use("/category", require("./category"));

module.exports = router;
