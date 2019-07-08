// 数据库配置文件
const db = require("../../core/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;

const user = Sequelize.import("../../models/User");

user.sync({ force: false });
class UserModel {
  // 注册用户
  static async regist(data) {
    return await user.create({
      password: data.password,
      mobile_phone: data.mobile_phone
    });
  }
  // 获取用户信息
  static async getUserInfo(mobile_phone) {
    return await user.findOne({
      where: {
        mobile_phone
      }
    });
  }
}
module.exports = UserModel;
