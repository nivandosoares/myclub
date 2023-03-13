//supertests for the match route
describe("GET /match", () => {
  it("should return 200 OK", () => {
    return request(app).get("/match").expect(200);
  });
});

describe("GET /match/test", () => {
  it("should return 200 OK", () => {
    return request(app).get("/match/test").expect(200);
  });
});

describe("GET /match/:id", () => {
  it("should return 200 OK", () => {
    return request(app).get("/match/1").expect(200);
  });
});

describe("POST /match/create", () => {
  it("should return 200 OK", () => {
    return request(app).post("/match/create").expect(200);
  });
});

describe("PUT /match/:id/update", () => {
  it("should return 200 OK", () => {
    return request(app).put("/match/1/update").expect(200);
  });
});

describe("DELETE /match/:id/delete", () => {
  it("should return 200 OK", () => {
    return request(app).delete("/match/1/delete").expect(200);
  });
});
