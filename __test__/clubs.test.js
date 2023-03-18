const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Club = require("../server/models/club.model");

describe("Club API", () => {
  
  afterEach(async () => {
    await Club.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe("GET /clubs", () => {
    it("should return an empty array when there are no clubs", async () => {
      const res = await request(app).get("/clubs/");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([]);
    });
    it("should return an array of clubs when there are clubs in the database", async () => {
      const club1 = {
        name: "Club 1",
        city: "Brazil",
        players: [],
        history: {
          championship: ["60905ec6db20c5289e9c206f"],
        },
      };
      const club2 = {
        name: "Club 2",
        city: "Spain",
        players: [],
        history: {
          championship: ["610bea2fc38cbb4e0484a4a2"],
        },
      };
      await Club.insertMany([club1, club2]);
      const res = await request(app).get("/clubs");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveLength(2);
      expect(res.body[0]).toHaveProperty("_id");
      expect(res.body[0]).toHaveProperty("name", "Club 1");
      expect(res.body[0]).toHaveProperty("city", "Brazil");
      expect(res.body[0].players).toEqual([]);
    });
  });

  describe("POST /clubs/create", () => {
    it("should create a new club", async () => {
      const newClub = {
        name: "New Club",
        city: "USA",
        players: [],
        history: {
          championship: ["MLS"],
        },
      };
      const res = await request(app).post("/clubs/create").send(newClub);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "New Club");
      expect(res.body).toHaveProperty("city", "USA");
      expect(res.body.players).toEqual([]);
    });
  });

  describe("DELETE /clubs/:id", () => {
    it("should delete a club", async () => {
      const club = new Club({
        name: "Club 1",
        city: "Brazil",
        players: [],
        history: {
          championship: ["MLS"],
        },
      });
      await club.save();
      const res = await request(app).delete(`/clubs/${club._id}`);
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("PUT /clubs/:id", () => {
    it("should update a club", async () => {
      const club = new Club({
        name: "Club 1",
        city: "Brazil",
        players: [],
        history: {
          championship: ["MLS"],
        },
      });
      await club.save();
      const res = await request(app)
        .put(`/clubs/${club._id}`)
        .send({
          name: "Updated Club",
          city: "Brazil",
          history: [
            {
              championship: ["Copa do Brasil", "Libertadores"],
            },
          ],
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("name", "Updated Club");
      expect(res.body).toHaveProperty("city", "Brazil");
    });
  });
});
