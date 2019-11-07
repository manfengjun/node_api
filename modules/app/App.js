const { MethodError, ParameterError } = require("../../core/error");
const res = require("../../core/res");
// const validate = require("validate");
const areaModule = require("./area_db");
const approve_types = require("../json/Approve_Type.json");
const approve_detail = require("../json/Approve_Detail.json");

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
  static async city(ctx) {
    const req = ctx.request.body;
    const level = req.level;
    const title = req.title;
    if (!level) {
      throw new MethodError("缺省level");
    }
    let data;
    switch (level) {
      case 1:
        data = await areaModule.fetchProvince();
        break;
      case 2:
        data = await areaModule.fetchCity(title);
        break;
      case 3:
        data = await areaModule.fetchDistrict(title);
        break;
      default:
        break;
    }
    if (!data) {
      throw new MethodError("查询失败");
    }
    res.success(ctx, "查询城市成功", data);
  }
  static async approve_type(ctx) {
    res.success(ctx, "查询类型成功", approve_types);
  }
  static async approve_detail(ctx) {
    res.success(ctx, "查询审批详情成功", approve_detail);
  }
}
module.exports = App;
