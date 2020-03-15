const app = require("./server")
const request = require('supertest')

test("GET /", done => {
  request(app)
    .get("/")
    .expect(200, JSON.stringify({ name: "John Doe", indonesianID: "1234123412341234", birthday: "1999-02-12T00:00:00Z" }))
    .end(done)
  console.log("GET /api/v1/users : Success!")
})

test("GET /", done => {
  request(app)
    .get("/:id")
    .expect(200, JSON.stringify({ id: "0", name: "John Doe", indonesianID: "1234123412341234", birthday: "1999-02-12T00:00:00Z" }))
    .end(done)
  console.log("GET /api/v1/users/1 : Success!")
})

test("POST /", async() => {
  await request(app)
    .post("/")
    .field("name", "John Doe")
    .expect(response => {
      expect(response.status).toBe(500)
    })
  console.log("POST /api/v1/users : Success!")
})

test("PUT /", async() => {
  await request(app)
    .put("/:id")
    .field("name", "John Doe 21")
    .field("indonesianID", "1234123412341234")
    .field("birthday", "1999-02-12T00:00:00Z")
    .expect(response => {
      expect(response.status).toBe(500)
    })
  console.log("PUT /api/v1/users/1 : Success!")
})

test("PUT /", async() => {
  await request(app)
    .put("/:id")
    .field("name", "John Doe 21")
    .expect(response => {
      expect(response.status).toBe(500)
    })
  console.log("PATCH /api/v1/users/1 : Success!")
})

test("DELETE /", done => {
  request(app)
    .delete("/:id")
    .expect(200, JSON.stringify({ deletedAt: "1999-02-12T00:00:00Z" }))
    .end(done)
  console.log("DELETE /api/v1/users/1 : Success!")
})