var express = require("express");
var router = express.Router();
router.get("/login", (req, res) => {
  res.send("这是登录接口");
});
module.exports = router;
