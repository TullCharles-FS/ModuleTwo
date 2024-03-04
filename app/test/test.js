const request = require("supertest");
const app = require("../index");
const Author = require("../models/Authors");

describe("GET /users", function () {
  it("responds with json", async function () {
    const reponse = await request(app)
      .get("api/v1/auhtors")
      .set("Accept", "application/json");

    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    console.log("Response body:", response.body);
  });

  it("responds to authors between 25-50", async function () {
    const reponse = await request(app)
      .get("/api/v1/authors?age[gt]=30&age[lt]=50")
      .set("Accept", "application/json");
  });
});
