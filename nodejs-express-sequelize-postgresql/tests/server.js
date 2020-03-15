const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send({ name: "John Doe", indonesianID: "1234123412341234", birthday: "1999-02-12T00:00:00Z" })
})

app.get("/:id", (req, res) => {
  res.send({ id: "0", name: "John Doe", indonesianID: "1234123412341234", birthday: "1999-02-12T00:00:00Z" })
})

app.post("/", (req, res) => {
  /** Create user */
  const user = {
    name: req.body.name,
    indonesianID: req.body.indonesianID,
    birthday: req.body.birthday,
    deletedAt: req.body.deletedAt
  };

  /** Save User in the database */
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
})

app.put("/:id", (req, res) => {
  /** Update user */
  const user = {
    name: req.body.name,
    indonesianID: req.body.indonesianID,
    birthday: req.body.birthday,
    deletedAt: req.body.deletedAt
  };

  /** Update User in the database */
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
})

app.patch("/:id", (req, res) => {
  /** Update user */
  const user = {
    name: req.body.name,
    indonesianID: req.body.indonesianID,
    birthday: req.body.birthday,
    deletedAt: req.body.deletedAt
  };

  /** Update User in the database */
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
})

app.delete("/:id", (req, res) => {
  res.send({ deletedAt: "1999-02-12T00:00:00Z" })
})

module.exports = app
