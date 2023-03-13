//supertests for the championship route
describe("GET /championship", () => {
  it("should return 200 OK", () => {
    return request(app).get("/championship").expect(200);
  });
});

describe("GET /championship/test", () => {
  it("should return 200 OK", () => {
    return request(app).get("/championship/test").expect(200);
  });
});

describe("GET /championship/:id", () => {
  it("should return 200 OK", () => {
    return request(app).get("/championship/1").expect(200);
  });
});

describe("POST /championship/create", () => {
  it("should return 200 OK", () => {
    return request(app).post("/championship/create").expect(200);
  });
});
