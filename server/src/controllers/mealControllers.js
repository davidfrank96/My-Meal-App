import meals from "../models/meals";

class MealControllers {

  static async getMeal(req, res) {
    try {
      const meals = await Meal.findAll({ where: { catererId: req.caterer.id } });
      return res.status(200).json({
        status: 'success',
        message: 'Meals Retrieved',
        data: meals
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Failed to Retrieve Meals'
      });
    }
  }

  static async postMeal(req, res) {
    try {
      const { name, price } = req.body;
      const { image } = req.files;
      const imageUrl = `/src/images/${image.name}`;
      const meal = await Meal.create({ name, price, imageUrl, catererId: req.caterer.id });
      await image.mv(`.${imageUrl}`);
      return res.status(201).json({
        status: 'success',
        message: 'Meal Option Added',
        data: {
          id: meal.id,
          name: meal.name,
          price: meal.price,
          imageUrl: meal.imageUrl
        }
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
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
