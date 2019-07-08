const Sequelize = require("sequelize");

const {
  database,
  host,
  port,
  user,
  password
} = require("../config/config").database;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "mysql",
  logging: true,
  timezone: "+08:00", //东八时区
  define: {
    timestamps: false
  }
});
// 创建模型
sequelize.sync({
  force: false
});

module.exports = {
  sequelize
};
