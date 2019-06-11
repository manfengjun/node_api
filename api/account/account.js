var express = require("express");
var router = express.Router();
var jwt = require("../../utils/jwt");
var ApiError = require("../../utils/error");
// 登录
router.get("/login", (req, res) => {
  let token = jwt.sign({ uid: "3" });
  res.json({ data: { token: token }, status: 1, msg: "登录成功" });
});
// 验证jsonwebtoken是否过期的中间件，在login接口后面执行，除了login接口的请求外，其他接口都需要验证token
router.use(async function jwtVerify(req, res, next) {
  try {
    let token = req.get("token");
    console.log(token);
    let payload = await jwt.check(token);
    if (!payload) {
      throw new ApiError(101, "token验证失败");
    }
    next();
  } catch (error) {
    throw new ApiError(101, "异常");
  }
});
// 注册
router.get("/regist", (req, res) => {
  res.send("这是注册接口");
});
// 退出登录
router.get("/loginout", (req, res) => {
  res.send("这是退出登录接口");
});
module.exports = router;
