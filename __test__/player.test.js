//supertest test for the player routes

const request = require("supertest");
const app = require("../app.js");
const Player = require("../models/player.model.js");

describe("GET /players", () => {
  it("should return 200 OK", () => {
    return request(app).get("/players").expect(200);
  });
});

describe("GET /players/test", () => {
  it("should return 200 OK", () => {
    return request(app).get("/players/test").expect(200);
  });
});

describe("GET /players/:id", () => {
  it("should return 200 OK", () => {
    return request(app).get("/players/1").expect(200);
  });
});

describe("GET /players/search/:club", () => {
  it("should return 200 OK", () => {
    return request(app).get("/players/search/1").expect(200);
  });
});

describe("GET /players/sort/:pos", () => {
  it("should return 200 OK", () => {
    return request(app).get("/players/sort/1").expect(200);
  });
});

describe("POST /players/create", () => {
  it("should return 200 OK", () => {
    return request(app).post("/players/create").expect(200);
  });
});

describe("PUT /players/:id/update", () => {
  it("should return 200 OK", () => {
    return request(app).put("/players/1/update").expect(200);
  });
});

describe("DELETE /players/:id/delete", () => {
  it("should return 200 OK", () => {
    return request(app).delete("/players/1/delete").expect(200);
  });
});
