'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Interview.belongsTo(models.Opportunity, { foreignKey: 'opportunityId' })
    }
  };
  Interview.init({
    opportunityId: DataTypes.INTEGER,
    time: DataTypes.STRING,
    date: DataTypes.STRING,
    meetingLink: DataTypes.STRING,
    interviewer: DataTypes.STRING,
    location: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interview',
    tableName: 'interviews'
  });
  return Interview;
};