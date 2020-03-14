module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING
    },
    indonesianID: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  });

  return User;
};