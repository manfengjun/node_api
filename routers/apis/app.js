const Router = require("koa-router");
const { AuthFailedError, NotFoundError } = require("../../core/error");
const res = require("../../core/res");
const app = require("../../modules/app/app");
// const Parameter = require("parameter");
const router = new Router({
  prefix: "/mfms/v1/app"
});
router.post("/department", async (ctx, next) => {
  await app.department(ctx);
});
router.post("/city", async (ctx, next) => {
  await app.city(ctx);
});
module.exports = router;
