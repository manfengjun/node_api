// 数据库配置文件
const db = require("../../core/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;

const area = Sequelize.import("../../models/Area");

area.sync({ force: false });
class AreaModel {
  // 获取省
  static async fetchProvince() {
    return await area.sequelize.query("select distinct sheng title from Area", {
      type: db.sequelize.QueryTypes.SELECT
    });
  }
  // 获取市
  static async fetchCity(title) {
    return await area.sequelize.query(
      "select distinct shi title from Area where sheng='" + title + "'",
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    );
  }
  // 获取区
  static async fetchDistrict(title) {
    return await area.sequelize.query(
      "select distinct xian as title,id from Area where shi='" + title + "'",
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    );
  }
}
module.exports = AreaModel;
