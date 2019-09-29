const { MethodError, ParameterError } = require("../../core/error");
const res = require("../../core/res");
// const validate = require("validate");
const departModule = require("./depart_db");

class App {
  static async department(ctx) {
    const req = ctx.request.body;
    const partment_id = req.id;
    if (!partment_id) {
      throw new MethodError("缺省partment_id");
    }
    const data = await departModule.fetchDeparts(partment_id);
    if (!data) {
      throw new MethodError("查询失败");
    }
    res.success(ctx, "查询部门成功", data);
  }
}
module.exports = App;
