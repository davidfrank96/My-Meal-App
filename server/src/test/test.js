import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "/../NodeProjects/My meal App/My-Meal-App/app";

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
          done();
        });
    });
  });
});
