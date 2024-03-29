process.env.NODE_ENV = "test";

const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

const request = supertest(app);

const { brandsQueries } = require("./brandsQueries.spec");

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
      it.only("returns all device types with access to all type properties when no arguments are passed", () => {
        const query = "{ deviceType { type_id\ntype_name } }";
        return request
          .get("/graphql")
          .send({ query })
          .then(({ body: { data: { deviceType } } }) => {
            console.log(deviceType);
            expect(deviceType.length).to.equal(3);
            expect(deviceType[0].type_id).to.equal("1");
            expect(Object.keys(deviceType[0])).to.eql(["type_id", "type_name"]);
          });
      });

      it("returns one device type when passed a type id as an argument", () => {
        const query = "{ deviceType(type_id: 2) { type_id\ntype_name } }";
        return request
          .get("/graphql")
          .send({ query })
          .then(({ body: { data: { deviceType } } }) => {
            expect(deviceType.length).to.equal(1);
            expect(deviceType[0].type_id).to.equal("2");
          });
      });

      it("returns the correct error if passed an argument of an incorrect type ", () => {
        const query = '{ deviceType(type_id: "two") { type_id\ntype_name } }';
        return request
          .get("/graphql")
          .send({ query })
          .then(({ body: { errors } }) => {
            const [messages] = errors;
            const { msg } = messages;
            expect(msg).to.equal(
              'argument "two" is incorrect data type; it must be a integer'
            );
          });
      });
    });
    describe("brands", () => {
      it("returns all device brands with access to all brand properties when no arguments are passed", () => {
        const query = "{ brand { brand_id\nbrand_name } }";
        return request
          .get("/graphql")
          .send({ query })
          .then(({ body: { data: { brand } } }) => {
            expect(brand.length).to.equal(4);
            expect(brand[0].brand_id).to.equal("1");
            expect(Object.keys(brand[0])).to.eql(["brand_id", "brand_name"]);
          });
      });

      it("returns one device brand when passed a brand id as an argument", () => {
        const query = "{ brand(brand_id: 2) { brand_id\nbrand_name } }";
        return request
          .get("/graphql")
          .send({ query })
          .then(({ body: { data: { brand } } }) => {
            expect(brand.length).to.equal(1);
            expect(brand[0].brand_id).to.equal("2");
          });
      });

      it("returns the correct error if passed an argument of an incorrect brand ", () => {
        const query = '{ brand(brand_id: "two") { brand_id\nbrand_name } }';
        return request
          .get("/graphql")
          .send({ query })
          .then(({ body: { errors } }) => {
            const [messages] = errors;
            const { msg } = messages;
            expect(msg).to.equal(
              'argument "two" is incorrect data type; it must be a integer'
            );
          });
      });
    });
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
    describe("devices", () => {
      it("updates a device's assigned employee, checked in status, and estimated time of return", () => {
        const mutation = `mutation {
          updateDeviceEmployee(device_id: 1, employee_id: 2) {
            device_id
            device_employee
          }
          updateDeviceInStock(device_id: 1, device_in_stock: false) {
            device_id
            device_in_stock
          }
        }`;
        return request
          .post("/graphql")
          .send({ query: mutation })
          .then(({ body: { data } }) => {
            expect(data).to.eql({
              updateDeviceEmployee: { device_id: "1", device_employee: 2 },
              updateDeviceInStock: { device_id: "1", device_in_stock: false }
            });
          });
      });

      it("updates a device's estimated time of return when passed a date string", () => {
        const mutation = `mutation {
          updateDeviceETR(device_id: 1, device_estimated_time_of_return: "02/13/2009 23:31:30") {
            device_id
            device_estimated_time_of_return
          }
        }`;
        return request
          .post("/graphql")
          .send({ query: mutation })
          .then(({ body: { data } }) => {
            expect(data).to.eql({
              updateDeviceETR: {
                device_id: "1",
                device_estimated_time_of_return: "1234567890"
              }
            });
          });
      });
      it("updates a device's ETR, in_stock, and employee in one mutation", () => {
        const mutation = `mutation {
          updateDeviceEmployee(device_id: 1, employee_id: 2) {
            device_id
            device_employee
          }
          updateDeviceInStock(device_id: 1, device_in_stock: false) {
            device_id
            device_in_stock
          }
          updateDeviceETR(device_id: 1, device_estimated_time_of_return: "02/13/2009 23:31:30") {
            device_id
            device_estimated_time_of_return
          }
        }`;
        console.log(mutation);
        return request
          .post("/graphql")
          .send({ query: mutation })
          .then(({ body: { data } }) => {
            expect(data).to.eql({
              updateDeviceEmployee: { device_id: "1", device_employee: 2 },
              updateDeviceInStock: { device_id: "1", device_in_stock: false },
              updateDeviceETR: {
                device_id: "1",
                device_estimated_time_of_return: "1234567890"
              }
            });
          });
      });
    });
  });
});
