import meals from "../db/meals";

class MealControllers {
  //Get Menu for the Single day
  static getMeal(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: meals
    });
  }
}

export default MealControllers;
