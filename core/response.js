function Success(status = 1, msg = "请求成功", data = {}) {
    return function (ctx, next) {
        ctx.response.body = {
            status: status,
            msg: msg,
            data: data || {}
          };
        await next();
    }
}
function Failure(status = -1, msg = "请求失败", data = {}) {
    return function (ctx, next) {
        ctx.response.body = {
            status: status,
            msg: msg,
            data: data || {}
          };
        await next();
    }
}
module.exports = {
    Success,
    Failure
};