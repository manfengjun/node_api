const res = require("./res");
const { NotFoundError } = require("./error");
module.exports = async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      throw new NotFoundError();
    }
  } catch (err) {
    res.error(ctx, err);
  }
};
