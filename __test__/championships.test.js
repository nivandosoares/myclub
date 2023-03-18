const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Championship = require("../server/models/championship.model");
const controller = require("../server/controllers/championship.controller");

describe("Championship API", () => {
  afterEach(async () => {
    await Championship.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  describe("GET /api/championships", () => {
    it("should return a list of championships", async () => {
      const championship1 = new Championship({
        name: "Championship 1",
        year: 2022,
        structure: "round-robin",
        numRounds: 2,
      });
      await championship1.save();

      const championship2 = new Championship({
        name: "Championship 2",
        year: 2023,
        structure: "league",
        numRounds: 3,
      });
      await championship2.save();

      const response = await request(app).get("/championships/");

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0].name).toBe(championship1.name);
      expect(response.body[1].name).toBe(championship2.name);
    });
  });

  describe("POST /api/championships", () => {
    it("should create a new championship", async () => {
      const championshipData = {
        name: "Championship 1",
        year: 2022,
        structure: "round-robin",
        numRounds: 2,
      };

      const response = await request(app)
        .post("/championships/create")
        .send(championshipData);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(championshipData.name);
      expect(response.body.year).toBe(championshipData.year);
      expect(response.body.structure).toBe(championshipData.structure);
      expect(response.body.numRounds).toBe(championshipData.numRounds);

      const championship = await Championship.findById(response.body._id);
      expect(championship).not.toBeNull();
    });
  });
});
