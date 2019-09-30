const { MethodError, ParameterError } = require("../../core/error");
const res = require("../../core/res");
// const validate = require("validate");
const userModule = require("./user_db");
class Account {
  static async register(ctx) {
    const req = ctx.request.body;
    const query = await userModule.getUserInfo(req.mobile_phone);
    if (query) {
      throw new MethodError("用户已存在");
    } else {
      const param = {
        password: req.password,
        mobile_phone: req.mobile_phone
      };
      const data = await userModule.regist(param);

      if (!data) {
        throw new MethodError("注册失败");
      }
      res.success(ctx, "用户注册成功", {
        mobile_phone: req.mobile_phone
      });
    }
  }
  static async login(ctx) {
    const req = ctx.request.body;
    const token = reg.token;
    res.success(ctx, "自动登录", { token: token });
    // if (token != nil) {
    //   // auto login
    //   this.autoLogin();
    // }
    // if (type == 0) {
    //   // pass login
    //   this.passLogin();
    // }
    // // code login
    // this.codeLogin();
  }
  static async autoLogin(ctx) {
    res.success(ctx, "自动登录", {});
  }
  static async passLogin(ctx) {
    res.success(ctx, "密码登录", {});
  }
  static async codeLogin(ctx) {
    res.success(ctx, "验证码登录", {});
  }
}
module.exports = Account;
