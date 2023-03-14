const app = require("../app.js");
const request = require("supertest");
const Championship = require("../models/championship.model.js");

//supertests for the championship route
describe("GET /championship", () => {
  it("should return 200 OK", () => {
    return request(app).get("/championships").expect(200);
  });
});

describe("GET /championship/test", () => {
  it("should return 200 OK", () => {
    return request(app).get("/championships/test").expect(200);
  });
});

describe("GET /championship/:id", () => {
  it("should return 200 OK", () => {
    return request(app).get("/championships/1").expect(200);
  });
});

describe("POST /championship/create", () => {
  it("should return 200 OK", () => {
    return request(app).post("/championships/create").expect(200);
  });
});
