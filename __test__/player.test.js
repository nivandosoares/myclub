const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Player = require("../server/models/player.model");

describe("Player API", () => {
  afterEach(async () => {
    await Player.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe("GET /players", () => {
    it("should return an empty array when there are no players", async () => {
      const res = await request(app).get("/players");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([]);
    });

    it("should return an array of players when there are players in the database", async () => {
      const player1 = { name: "Player 1", age: 25, position: "Forward" };
      const player2 = { name: "Player 2", age: 27, position: "Midfielder" };
      await Player.insertMany([player1, player2]);
      const res = await request(app).get("/players");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveLength(2);
      expect(res.body[0]).toHaveProperty("_id");
      expect(res.body[0]).toHaveProperty("name", "Player 1");
      expect(res.body[0]).toHaveProperty("age", 25);
      expect(res.body[0]).toHaveProperty("position", "Forward");
    });
  });

  describe("POST /players/create", () => {
    it("should create a new player", async () => {
      const newPlayer = {
        name: "New Player",
        age: 22,
        position: "Defender",
      };
      const res = await request(app).post("/players/create").send(newPlayer);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "New Player");
      expect(res.body).toHaveProperty("age", 22);
      expect(res.body).toHaveProperty("position", "Defender");
    });
  });

  describe("GET /players/:id", () => {
    it("should return a player when the ID exists", async () => {
      const player = new Player({
        name: "Player 1",
        age: 25,
        position: "Forward",
      });
      await player.save();
      const res = await request(app).get(`/players/${player._id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "Player 1");
      expect(res.body).toHaveProperty("age", 25);
      expect(res.body).toHaveProperty("position", "Forward");
    });

    it("should return a 404 error when the ID does not exist", async () => {
      const res = await request(app).get("/players/602fa9aae555780b88140e42");
      expect(res.statusCode).toEqual(404);
    });
  });

  describe("DELETE /players/:id", () => {
    it("should delete a player and return a 200 status code", async () => {
      const player = new Player({ name: "Player 1", age: 25 });
      await player.save();
      const res = await request(app).delete(`/players/${player._id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "Player 1");
    });
  });

  describe("PUT /players/:id", () => {
    it("should update a player and return a 200 status code", async () => {
      const player = new Player({ name: "Player 1", age: 25 });
      await player.save();
      const res = await request(app)
        .put(`/players/${player._id}`)
        .send({ name: "Updated Player", age: 30 });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "Updated Player");
      expect(res.body).toHaveProperty("age", 30);
    });
  });
});
