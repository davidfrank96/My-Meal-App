import menu from "../models/menu";

class MenuControllers {
  //Get Menu for the Single day
  static getMenu(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: menu
    });
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
