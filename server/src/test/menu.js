import chai, { expect, assert, use } from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);
chai.should();

describe("menu", () => {
  describe("GET Menu", () => {
    it("should get the menu for the day", done => {
      chai
        .request(app)
        .get("/api/v1/menu")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          assert.equal(res.body.data.name);
          assert.equal(res.body.data.price);
          done();
        });
    });
  });
});

describe("menu", () => {
  describe("GET Menu", () => {
    it("should get menu for the day", done => {
      chai
        .request(app)
        .get("/api/v1/menu")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          assert.equal(res.body.data.name);
          assert.equal(res.body.data.price);
          done();
        });
    });
  });

  describe("POST Menu", () => {
    it("it should be able to POST the menu for the day ", done => {
      chai
        .request(app)
        .post("/api/v1/menu")

        .end((err, res) => {
          res.should.have.status(400);
            res.body.should.have.property("status");
          done();
        });
    });
    it("should POST a Menu for the day", done => {
      chai
        .request(app)
        .post("/api/v1/menu")
        .send({
          name: "Menu",
          price: "$15"
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          assert.equal(res.body.data[0].name, "Menu");
          assert.equal(res.body.data[0].price, "$15");
          done();
        });
    });
  });
});
