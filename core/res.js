/// 请求成功数据正常
const success = 1;
/// 请求正常不通过
const just = 0;
/// 请求失败
const error = -1;
class Res {
  //构造函数
  constructor() {}
  // json输出
  static json(ctx, status, msg, data = {}) {
    ctx.status = 200;
    ctx.body = {
      status: status,
      msg: msg,
      data: data
    };
  }
  static success(ctx, msg = "请求成功", data = {}) {
    ctx.status = 200;
    ctx.body = {
      status: 1,
      msg: msg,
      data: data
    };
  }
  static failure(ctx, status, msg) {
    ctx.status = 200;
    ctx.body = {
      status: status,
      msg: msg,
      data: {}
    };
  }
  static error(ctx, error) {
    ctx.status = 200;
    ctx.body = {
      status: error.status || 500,
      msg: error.msg || "服务器异常",
      data: {}
    };
  }
}
module.exports = Res;
