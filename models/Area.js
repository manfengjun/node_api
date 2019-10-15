/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Area', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    sheng: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    shi: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    xian: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    lat: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    lng: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'Area'
  });
};
