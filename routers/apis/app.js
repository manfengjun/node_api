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
router.post("/approve/type", async (ctx, next) => {
  await app.approve_type(ctx);
});
router.post("/approve/detail", async (ctx, next) => {
  await app.approve_detail(ctx);
});
router.post("/approve/goods", async (ctx, next) => {
  await app.approve_goods(ctx);
});
router.post("/attence/mine", async (ctx, next) => {
  await app.attence_mine(ctx);
});
router.post("/attence/attend", async (ctx, next) => {
  await app.attence_attend(ctx);
});
router.post("/ad", async (ctx, next) => {
  await app.ad(ctx);
});
module.exports = router;
