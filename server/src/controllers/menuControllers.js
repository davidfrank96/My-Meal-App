import Menu from "../models/menu";

class MenuControllers {
  static generateDate() {
    const date = new Date();
    const month = `${date.getMonth() + 1}`;
    const today = `${date.getFullYear()}-${month.padStart(
      2,
      "0"
    )}-${date.getDate()}`;
    return today;
  }

  static async getMenu(req, res) {
    try {
      const today = MenuControllers.generateDate();
      const menu = await Menu.findAll({ where: { createdAt: today } });
      return res.status(200).json({
        status: "success",
        message: "Menus Retrieved",
        data: menu
      });
    } catch (err) {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    }
  }
  

  static async getSingleMenu(req, res) {
    try {
      const today = MenuControllers.generateDate();
      const menu = await Menu.findOne({
        where: { createdAt: today, catererId: req.caterer.id }
      });
      return res.status(200).json({
        status: "success",
        message: "Caterer Menu Retrieved",
        data: menu
      });
    } catch (err) {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    }
  }

  static async updateMeals(menu, safeMeal, mealId, quantity) {
    try {
      const { meals } = menu.dataValues;
      const updatedMenuMeals = JSON.parse(meals);
      const mealIndex = updatedMenuMeals.findIndex(menuMeal => menuMeal.id === Number(mealId));
      if (mealIndex < 0) {
        updatedMenuMeals.push(safeMeal);
      } else {
        updatedMenuMeals[mealIndex].quantity += Number(quantity);
      }
      return updatedMenuMeals;
    } catch (err) {
      throw new Error(`Update - ${err.message}`);
    }
  }


  static async postMenu(req, res) {
    try {
      const { mealId, quantity } = req.body;
      const meal = await Meal.findOne({ where: { id: mealId, catererId: req.caterer.id } });
      if (!meal) {
        throw new Error(`Meal with that ID Doesn't exist`);
      }
      const { createdAt, updatedAt, ...storeMeal } = meal.dataValues;
      storeMeal.quantity = Number(quantity);
      const today = MenuControllers.generateDate();
      const menu = await Menu.findAll({ where: { catererId: req.caterer.id, createdAt: today } });
      let menuMeals;
      if (menu.length === 0) {
        menuMeals = [];
        menuMeals.push(storeMeal);
        await Menu.create({
          meals: JSON.stringify(menuMeals),
          catererId: req.caterer.id
        });
        await Meal.update({ quantity }, { where: { id: mealId } });
      } else {
        menuMeals = await MenuControllers.updateMeals(menu[0], storeMeal, mealId, quantity);
        await Menu.update(
          { meals: JSON.stringify(menuMeals) },
          { where: { catererId: req.caterer.id, createdAt: today } }
        );
        const mealIndex = menuMeals.findIndex(menuMeal => menuMeal.id === Number(mealId));
        await Meal.update({ quantity: menuMeals[mealIndex].quantity }, { where: { id: mealId } });
      }
      return res.status(200).json({
        status: 'success',
        message: 'Meal Added to Menu',
        data: menuMeals
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  }
}

export default MenuControllers;
