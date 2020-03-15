const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate 
  var rgxNoNumber = /\d/g;
  if (rgxNoNumber.test(req.body.name)) {
    res.status(400).send({
      message: "Content name can not contain number!"
    });
    return;
  }

  var rgxOnlyNumber = /^\d+$/;
  if (!rgxOnlyNumber.test(req.body.indonesianID) && req.body.indonesianID.length == 16) {
    res.status(400).send({
      message: "Content ID can only contain number and 16 in length!"
    });
    return;
  }

  // Create a User
  const user = {
    name: req.body.name,
    indonesianID: req.body.indonesianID,
    birthday: req.body.birthday,
    deletedAt: req.body.deletedAt
  };

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  User.findAll({ where: condition }, { offset: 3, limit: 1 })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update all attributes of a User by the id in the request
exports.updateAll = (req, res) => {
  // Validate 
  if (!req.body.name && !req.body.indonesianID && !req.body.birthday) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  var rgxNoNumber = /\d/g;
  if (rgxNoNumber.test(req.body.name)) {
    res.status(400).send({
      message: "Content name can not contain number!"
    });
    return;
  }

  var rgxOnlyNumber = /^\d+$/;
  if (!rgxOnlyNumber.test(req.body.indonesianID) && req.body.indonesianID.length == 16) {
    res.status(400).send({
      message: "Content ID can only contain number and 16 in length!"
    });
    return;
  }
  
  const id = req.params.id;

  const isIdUnique = id =>
    db.Profile.findOne({ where: { id} })
      .then(token => token !== null)
      .then(isUnique => isUnique);

  if (!isIdUnique) {
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  } else {
    // Create a User
    const user = {
      name: req.body.name,
      indonesianID: req.body.indonesianID,
      birthday: req.body.birthday,
      deletedAt: req.body.deletedAt
    };

    // Save User in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  }
};

// Update an attributes of a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Sofdelete an attributes of a User by the id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  var date = new Date();
  var timestamp = date.getTime();
  req.body.deletedAt = timestamp;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};