var express = require("express");
var router = express.Router();
router.get("/login", (req, res) => {
  res.send("这是登录接口");
});
router.get("/regist", (req, res) => {
  res.send("这是注册接口");
});
router.get("/loginout", (req, res) => {
  res.send("这是退出登录接口");
});
module.exports = router;
