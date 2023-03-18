const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Championship = require("../server/models/championship.model");

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

  describe("GET /api/championships/:id", () => {
    it("should return a championship", async () => {
      const championship = new Championship({
        name: "Championship 1",
        year: 2022,
        structure: "round-robin",
        numRounds: 2,
      });
      await championship.save();

      const response = await request(app).get(
        `/championships/${championship._id}`
      );

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(championship.name);
      expect(response.body.year).toBe(championship.year);
      expect(response.body.structure).toBe(championship.structure);
      expect(response.body.numRounds).toBe(championship.numRounds);
    });
    it("should return 404 if championship is not found", async () => {
      const response = await request(app).get(
        `/championships/64154ffc275c915893039938`
      );

      expect(response.status).toBe(404);
    });
  });

  describe("PUT /api/championships/:id", () => {
    it("should update a championship", async () => {
      const championship = new Championship({
        name: "Championship 1",
        year: 2022,
        structure: "round-robin",
        numRounds: 2,
      });
      await championship.save();

      const championshipData = {
        name: "Championship 2",
        year: 2023,
        structure: "league",
        numRounds: 3,
      };

      const response = await request(app)
        .put(`/${championship._id}/`)
        .send(championshipData);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(championshipData.name);
      expect(response.body.year).toBe(championshipData.year);
      expect(response.body.structure).toBe(championshipData.structure);
      expect(response.body.numRounds).toBe(championshipData.numRounds);
    });
    it("should return 404 if championship is not found", async () => {
      const championshipData = {
        name: "Championship 2",
        year: 2023,
        structure: "league",
        numRounds: 3,
      };

      const response = await request(app)
        .put(`/championships/64154ffc275c915893039938`)
        .send(championshipData);

      expect(response.status).toBe(200);
    });
  });
});
