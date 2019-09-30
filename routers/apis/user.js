const Router = require("koa-router");
const { AuthFailedError, NotFoundError } = require("../../core/error");
const res = require("../../core/res");
const account = require("../../modules/account/account");
// const Parameter = require("parameter");
const router = new Router({
  prefix: "/api/v1/account"
});
var jwt = require("../../utils/jwt");
router.post("/login", async (ctx, next) => {
  await account.login(ctx);
});
router.get("/list", async (ctx, next) => {
  throw new AuthFailedError();
});
router.post("/regist", async (ctx, next) => {
  await account.register(ctx);
});
module.exports = router;
