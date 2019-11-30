const { MethodError, ParameterError } = require("../../core/error");
const res = require("../../core/res");
// const validate = require("validate");
const areaModule = require("./area_db");
const approve_types = require("../json/Approve/Approve_Type.json");
const approve_detail = require("../json/Approve/Approve_Detail.json");
const approve_goods = require("../json/Approve/Approve_Goods.json");

const attence = require("../json/Attence/attence.json");

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
  static async approve_goods(ctx) {
    res.success(ctx, "查询商品成功", approve_goods);
  }
  static async attence_mine(ctx) {
    res.success(ctx, "查询考勤成功", attence);
  }
  static async attence_attend(ctx) {
    let date = new Date();
    let second = date.getSeconds();
    if (second % 2 == 0) {
      res.success(ctx, "打卡成功", { result: "2019-09-08 17:34:44" });
    } else {
      throw new MethodError("打卡失败");
    }
  }
  static async ad(ctx) {
    res.success(ctx, "打卡成功", {
      result: {
        page_url: "",
        update_time: "2019-11-20 00:00:00",
        pic_url: "http://img.wtdms.com/1574235874674",
        create_time: "2019-11-20 00:00:00",
        end_time: "2019-11-25 00:00:00",
        start_time: "2019-11-21 00:00:00"
      }
    });
  }
}
module.exports = App;
