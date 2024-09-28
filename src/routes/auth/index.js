const express = require("express");
const router = express.Router();

const controller = require("./auth.controller");

router.post("/login", async (req, res) => {
  const result = await controller.login(req.body);
  res.send(result);
});

router.post("/register", async (req, res) => {
  const result = await controller.register(req.query);
  res.send(result);
});

router.put("/:id/update", async (req, res) => {
  const result = await controller.updateUser(req.query);
  res.send(result);
});

module.exports = router;
