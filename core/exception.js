const res = require("./res");
const { NotFoundError } = require("./error");
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    res.error(ctx, err);
  }
};
