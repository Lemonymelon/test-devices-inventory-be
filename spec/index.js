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
    describe("device_types", () => {});
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
