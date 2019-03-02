import menu from "../models/menu";

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
      const today = MenuController.generateDate();
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
      const today = MenuController.generateDate();
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
}

  // Post/add Menu for the  day
  static postMenu(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        status: res.statusCode,
        message: "Menu name is required"
      });
    }
    const newMenu = {
      id: menu.length + 1,
      name: req.body.name,
      price: req.body.price
    };
    menu.push(newMenu);
    return res.status(201).json({
      status: res.statusCode,
      data: [
        {
          id: newMenu.id,
          name: newMenu.name,
          price: newMenu.price
        }
      ]
    });
  }
}

export default MenuControllers;
