module.exports = (sequelize, Sequelize) => {
  const Mtgtest = sequelize.define("mtgtest", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Mtgtest;
};