/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "Department",
    {
      id: {
        type: DataTypes.INTEGER(255).UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      depart_num: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      company_id: {
        type: DataTypes.INTEGER(20),
        allowNull: false
      },
      partment_id: {
        type: DataTypes.INTEGER(20),
        allowNull: false
      },
      depart_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      isMenu: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      },
      haveSub: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      }
    },
    {
      tableName: "Department"
    }
  );
};
