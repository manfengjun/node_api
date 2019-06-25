const Router = require("koa-router");
const router = new Router({
  prefix: "/api/v1/user"
});
var jwt = require("../../utils/jwt");
router.get("/login", async (ctx, next) => {
  let token = jwt.sign({ uid: "3" });
  if (token) {
    ctx.body = { data: { token: token }, status: 1, msg: "登录成功" };
    await next();
  }
});
router.get(
  "/list",
  async (ctx, next) => {
    ctx.response.status = 200;
    ctx.response.body = "home";
    await next();
  },
  jwt.check
);

module.exports = router;
