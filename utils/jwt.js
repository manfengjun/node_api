const jwt = require("jsonwebtoken");
const fs = require("fs");
const { AuthFailedError } = require("../core/error");
var token = {
  sign: function(payload, timeout) {
    // 获取签发 JWT 时需要用的密钥
    const privateKey = fs.readFileSync("./config/private_key.pem");
    // 签发 Token
    const token = jwt.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: timeout ? timeout : 60 * 60 * 24 * 7
    });
    return token;
  },
  check: async (ctx, next) => {
    // 获取验证 JWT 时需要用的公钥
    const publicKey = fs.readFileSync("./config/public_key.pem");
    if (["/login"].indexOf(ctx.url) !== -1) {
      await next();
      return;
    }
    if (!ctx.header.authorization) {
      // 没有携带token
    }
    let token = ctx.header.authorization.split(" ")[1];
    if (!token) {
      // ctx.throw(501);
    }
    try {
      let payload = await jwt.verify(token, publicKey, {
        algorithm: "RS256"
      });
      await next();
    } catch (err) {
      throw new AuthFailedError();
    }
  }
};
module.exports = token;
