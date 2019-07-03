class Account {
  static async register(ctx) {
    const req = ctx.request.body;
    if (req.mobile_phone && req.password) {
      try {
        const query = await userModule.getUserInfo(req.mobile_phone);
        if (query) {
          throw new HHError(-1, "用户已存在");
        } else {
          const param = {
            password: req.password,
            mobile_phone: req.mobile_phone
          };
          const data = await userModule.userRegist(param);
          if (data) {
              
          }
          ctx.response.status = 200;
          ctx.body = {
            status: 1,
            msg: "用户注册成功",
            data: {
              mobile_phone: req.mobile_phone
            }
          };
        }
      } catch (error) {
        throw new HHError(-1, "参数异常");
      }
    }
  }
}

module.exports = Account;
