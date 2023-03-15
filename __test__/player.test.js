const app = require("../app");
const request = require("supertest");
const player = require("../models/player.model");

// Define um player de Sample para os testes
const playerSample = {
  name: "João Silva",
  age: 25,
  position: "Atacante",
  club: "ABC Futebol club",
  matchesPlayed: [
    {
      match: "6155f5bc937d9b8d5cfaea0d",
      goals: 2,
      assists: 1,
    },
    {
      match: "6155f5cc937d9b8d5cfaea0e",
      goals: 1,
      assists: 0,
    },
  ],
  goals: 3,
  assists: 1,
};

// Cria um player de Sample no banco de dados antes dos testes
beforeAll(async () => {
  await player.deleteMany({});
  await new player(playerSample).save();
});

// Testa a rota para obter todos os playeres
describe("GET /players/", () => {
  test("Deve retornar todos os jogadores", async () => {
    const response = await request(app).get("/players");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  });
});

// Testa a rota para obter um player específico por ID
describe("GET /players/:id", () => {
  test("Deve retornar um player específico por ID", async () => {
    const player = await player.findOne({});
    const response = await request(app).get(`/players/${player._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(playerSample.name);
    expect(response.body.age).toBe(playerSample.age);
    expect(response.body.position).toBe(playerSample.position);
    expect(response.body.club).toBe(playerSample.club);
    expect(response.body.matchesPlayed.length).toBe(
      playerSample.matchesPlayed.length
    );
    expect(response.body.goals).toBe(playerSample.goals);
    expect(response.body.assists).toBe(playerSample.assists);
  });
});

// Testa a rota para adicionar um new player
describe("POST /players/create", () => {
  test("Deve adicionar um new player", async () => {
    const newplayer = {
      name: "José Santos",
      age: 22,
      position: "Meio-campista",
      club: "DEF Futebol club",
      matchesPlayed: [],
      goals: 0,
      assists: 0,
    };
    const response = await request(app).post("/players/create").send(newplayer);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(newplayer.name);
    expect(response.body.age).toBe(newplayer.age);
    expect(response.body.position).toBe(newplayer.position);
    expect(response.body.club).toBe(newplayer.club);
    expect(response.body.matchesPlayed.length).toBe(0);
    expect(response.body.goals).toBe(playerSample.goals);
    expect(response.body.assists).toBe(playerSample.assists);
  });
});
