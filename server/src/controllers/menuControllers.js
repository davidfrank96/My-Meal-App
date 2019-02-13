import menu from "../db/menu";

class MenuControllers {
  //Get Menu for the Single day
  static getMenu(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: menu
    });
  }

  // Post Menu for the single day
  static postMenu(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        status: res.statusCode,
        message: "Menu name is required"
      });
    }
    const newMenu = {
      id: req.body.id,
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
