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
    ctx.response.body = {
      status: status,
      msg: msg,
      data: data
    };
  }
  static success(ctx, msg = "请求成功", data = {}) {
    ctx.status = 200;
    ctx.response.body = {
      status: 1,
      msg: msg,
      data: data
    };
  }
  static failure(ctx, status, msg) {
    ctx.status = 200;
    ctx.response.body = {
      status: status,
      msg: msg,
      data: {}
    };
  }
  static error(ctx, error) {
    console.log("sdf");
    ctx.status = 200;
    ctx.response.body = {
      status: error.status,
      msg: error.msg,
      data: {}
    };
  }
}
module.exports = Res;
