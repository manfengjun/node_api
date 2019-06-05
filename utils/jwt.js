const jwt = require("jsonwebtoken");
const fs = require("fs");
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
  check: function(token) {
    // 获取验证 JWT 时需要用的公钥
    const publicKey = fs.readFileSync("./config/public_key.pem");
    // 验证 Token
    jwt.verify(token, publicKey, (error, payload) => {
      if (error) {
        console.log("token验证失败");
        console.log(error.message);
        return "";
      }
      return payload;
    });
  }
};
module.exports = token;
