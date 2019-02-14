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

  // put/Patch for updating the info of a meal
  static updateMealName(req, res) {
    const findMeal = meals.find(
      meal => meal.id === parseInt(req.params.id, 10)
    );
    if (findMeal) {
      delete findMeal.name;
      findMeal.name = req.body.name;

      return res.status(200).json({
        status: res.statusCode,
        data: [
          {
            id: findMeal.id,
            name: findMeal.name,
            price: findMeal.price
          }
        ]
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      message: "meal  not found"
    });
  }


  //Delete Meals
  static deleteMeal(req, res) {
    const findMeal = meals.find(
      mealobj => mealobj.id === parseInt(req.params.id, 10)
    );
    if (!findMeal) res.status(404).send("The record does not exist");

    const index = meals.indexOf(findMeal);
    meals.splice(index, 1);

    res.status(200).json({
      status: res.statusCode,
      data: [
        {
          id: findMeal.id,
          message: "meal has been deleted"
        }
      ]
    });
  }

}

export default MealControllers;
