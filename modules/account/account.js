const { MethodError, ParameterError } = require("../../core/error");
const res = require("../../core/res");
class Account {
  static async register(ctx) {
    const req = ctx.request.body;
    if (!req.mobile_phone || !req.password) {
      throw new ParameterError("参数错误");
    }
    if (!validator.isMobilePhone(req.mobile_phone, "'zh-CN'")) {
      throw new ParameterError("手机号格式错误");
    }
    try {
      const query = await userModule.getUserInfo(req.mobile_phone);
      if (query) {
        throw new MethodError("用户已存在");
      } else {
        const param = {
          password: req.password,
          mobile_phone: req.mobile_phone
        };
        const data = await userModule.userRegist(param);

        if (data) {
        }
        res.success(ctx, "用户注册成功", {
          mobile_phone: req.mobile_phone
        });
      }
    } catch (error) {
      throw new MethodError("注册失败");
    }
  }
}

module.exports = Account;
