import chai, { expect, assert } from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);
chai.should();

describe("meal", () => {
  describe("GET Meal", () => {
    it("should get all meals for the day", done => {
      chai
        .request(app)
        .get("/api/v1/meals")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          assert.equal(res.body.data.name);
          assert.equal(res.body.data.price);
          done();
        });
    });

    it("should GET a Single Meal", done => {
      const id = 1;
      chai
        .request(app)
        .get(`/api/v1/meals`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          assert.equal(res.body.data[0].name,);
          assert.equal(res.body.data[0].price, );
          done();
        });
    });
  });

  describe("POST Meal", () => {
    it("it should be able to POST a meal into the menu", done => {
      chai
        .request(app)
        .post("/api/v1/meals")

        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property("status");
          done();
        });
    });
    it("should POST a Meal for the day", done => {
      chai
        .request(app)
        .post("/api/v1/meals")
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          assert.equal(res.body.data[0].name,);
          assert.equal(res.body.data[0].price,);
          done();
        });
    });
  });

  describe("PUT a Meal", () => {
    it("should EDIT a Meal name", done => {
      const id = 1;
      chai
        .request(app)
        .put(`/api/v1/meals/${id}`)
        .send({
          name: ""
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          assert.equal(res.body.data[0].name,);
          assert.equal(res.body.data[0].price,);
          done();
        });
    });
  });

  describe("DELETE Meal", () => {
    it("should DELETE a Meal", done => {
      const id = 1;
      chai
        .request(app)
        .delete(`/api/v1/meals/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          assert.equal(res.body.data[0].name);
          assert.equal(res.body.data[0].price);
          done();
        });
    });
  });
});
