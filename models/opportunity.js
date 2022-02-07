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
    }
  };
  Opportunity.init({
    jobTitle: DataTypes.STRING,
    company: DataTypes.STRING,
    payRange: DataTypes.STRING,
    location: DataTypes.STRING,
    pointOfContact: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    jobPostURL: DataTypes.STRING,
    companyURL: DataTypes.STRING,
    DateApplied: DataTypes.STRING,
    interview: DataTypes.ARRAY,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Opportunity',
  });
  return Opportunity;
};