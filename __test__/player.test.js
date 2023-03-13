//supertest test for the player routes

const request = require("supertest");
const app = require("../app.js");
const Player = require("../models/player.model.js");

describe("GET /players", () => {
  it("should return 200 OK", () => {
    return request(app).get("/players").expect(200);
    expect(res.body.length).toBe(greaterThan(0));
  });
});
