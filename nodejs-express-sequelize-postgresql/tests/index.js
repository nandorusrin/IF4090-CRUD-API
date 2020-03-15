const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send({ name: "John Doe" })
})

app.listen(8000, () => {
  console.log("Server has started!")
})