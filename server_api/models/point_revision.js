"use strict";

module.exports = function(sequelize, DataTypes) {
  var PointRevision = sequelize.define("PointRevision", {
    name: { type: DataTypes.STRING, allowNull: true },
    content: { type: DataTypes.TEXT, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.INTEGER, allowNull: false },
    website: DataTypes.STRING,
    ip_address: { type: DataTypes.STRING, allowNull: false },
    user_agent: { type: DataTypes.TEXT, allowNull: false }
  }, {
    underscored: true,
    tableName: 'point_revisions',
    classMethods: {
      associate: function(models) {
        PointRevision.belongsTo(models.Point);
        PointRevision.belongsTo(models.User);
      }
    }
  });

  return PointRevision;
};
