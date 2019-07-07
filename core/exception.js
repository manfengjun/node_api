const res = require("./res");
const { logger } = require("../core/logger"); //日志;
module.exports = async (ctx, next) => {
  try {
    await next();

  } catch (err) {
    logger.error(err);
    res.error(ctx, err);
  }
};
