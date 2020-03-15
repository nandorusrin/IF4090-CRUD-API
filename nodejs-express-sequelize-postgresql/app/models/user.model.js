/**
 *  Defining the Sequelize model
 *  Sequelize Model represents users table in PostgreSQL database. 
 *  These columns will be generated automatically: id, name, indonesianID, birthday, deletedAt, createdAt, updatedAt.
 *  @author nandorusrin
 *
 */

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