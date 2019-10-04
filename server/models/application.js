'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dl: DataTypes.STRING,
    dlstate: DataTypes.STRING,
    currentincome: DataTypes.STRING,
    currenthouseholdincome: DataTypes.STRING,
    currentpayment: DataTypes.STRING,
    employer: DataTypes.STRING,
    supervisor: DataTypes.STRING,
    supervisorphoneno: DataTypes.STRING,
    cofirstname: DataTypes.STRING,
    colastname: DataTypes.STRING,
    otherresidents: DataTypes.STRING
  }, {});
  Application.associate = function(models) {
    // associations can be defined here
  };
  return Application;
};
