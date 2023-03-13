//supertest test for the player routes

const request = require("supertest");
const app = require("../app.js");
const Player = require("../models/player.model.js");

describe("GET /players/test", () => {
  it("should return 200 OK", () => {
    return request(app).get("/players/test").expect(200);
  });
});
