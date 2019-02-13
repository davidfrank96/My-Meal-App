import meals from "../db/meals";

class MealControllers {
  //Get Meal for the Single day
  static getMeal(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: meals
    });
  }
  // Post/add a Meal Option
  static postMeal(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        status: res.statusCode,
        message: "Meal name is required"
      });
    }
    const newMeal = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price
    };
    meals.push(newMeal);
    return res.status(201).json({
      status: res.statusCode,
      data: [
        {
          id: newMeal.id,
          name: newMeal.name,
          price: newMeal.price
        }
      ]
    });
  }
}

export default MealControllers;
