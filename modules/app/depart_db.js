// 数据库配置文件
const db = require("../../core/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;

const depart = Sequelize.import("../../models/Department");

depart.sync({ force: false });
class DepartModel {
  // 获取部门
  static async fetchDeparts(partment_id) {
    console.log(
      depart.findAll({
        where: {
          partment_id
        }
      })
    );
    return await depart.findAll({
      where: {
        partment_id
      }
    });
  }
}
module.exports = DepartModel;
