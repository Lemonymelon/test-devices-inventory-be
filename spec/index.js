process.env.NODE_ENV = "test";

const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

const request = supertest(app);

describe("/graphql", () => {
  beforeEach(() =>
    connection.migrate
      .rollback()
      .then(() => connection.migrate.latest())
      .then(() => connection.seed.run())
  );
  after(() => connection.destroy());

  describe("queries", () => {
    describe("device_types", () => {
      it.only("returns all device types when no arguments are passed", () => {
        const query = "{ deviceType { type_id\ntype_id\ntype_name } }";
        return request
          .get("/graphql")
          .send({ query })
          .then(({ body: { data: { deviceType } } }) => {
            expect(deviceType.length).to.equal(3);
            expect(deviceType[0].type_id).to.equal("1");
            expect(Object.keys(deviceType[0])).to.eql(["type_id", "type_name"]);
          });
      });
    });
    describe("brands", () => {});
    describe("operating_systems", () => {});
    describe("departments", () => {});
    describe("employees", () => {});
    describe("devices", () => {});
  });

  describe("mutations", () => {
    describe("device_types", () => {});
    describe("brands", () => {});
    describe("operating_systems", () => {});
    describe("departments", () => {});
    describe("employees", () => {});
    describe("devices", () => {});
  });
});
