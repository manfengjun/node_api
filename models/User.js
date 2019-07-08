/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "User",
    {
      customer_id: {
        type: DataTypes.INTEGER(255),
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      cust_name: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      mobile_phone: {
        type: DataTypes.STRING(11),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      province: {
        type: DataTypes.INTEGER(20),
        allowNull: true
      },
      city: {
        type: DataTypes.INTEGER(20),
        allowNull: true
      },
      district: {
        type: DataTypes.INTEGER(20),
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        defaultValue: "1"
      },
      cust_kind: {
        type: DataTypes.INTEGER(20),
        allowNull: true
      },
      portrait: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      create_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      update_time: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      tableName: "User"
    }
  );
};
