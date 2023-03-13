//supertest for the club routes
//
const request = require("supertest");

const app = require("../app.js");
const Club = require("../models/club.model.js");

describe("GET /clubs/test", () => {
  it("should return 200 OK", () => {
    return request(app).get("/clubs/test").expect(200);
  });
});

describe("GET /clubs", () => {
  it("should return 200 OK", () => {
    return request(app).get("/clubs").expect(200);
  });
});

describe("GET /clubs/:id", () => {
  it("should return 200 OK", () => {
    return request(app).get("/clubs/1").expect(200);
  });
});

describe("POST /clubs/create", () => {
    it("should return 200 OK", () => {
        return request(app).post("/clubs/create").expect(200);
    });
});

describe("PUT /clubs/:id/update", () => {
    it("should return 200 OK", () => {
        return request(app).put("/clubs/1/update").expect(200);
    });
});

describe("DELETE /clubs/:id/delete", () => {
    it("should return 200 OK", () => {
        return request(app).delete("/clubs/1/delete").expect(200);
    });
});

    
