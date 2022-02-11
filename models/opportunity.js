'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opportunity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Opportunity.belongsTo(models.User, { foreignKey: 'userId' })
      Opportunity.hasMany(models.Interview, { foreignKey: 'opportunityId' })
    }
  };
  Opportunity.init({
    jobTitle: DataTypes.STRING,
    stage: DataTypes.STRING,
    company: DataTypes.STRING,
    payRange: DataTypes.STRING,
    location: DataTypes.STRING,
    pointOfContact: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    jobPostURL: DataTypes.STRING,
    companyURL: DataTypes.STRING,
    DateApplied: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Opportunity',
    tableName: 'opportunities'
  });
  return Opportunity;
};