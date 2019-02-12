import menu from "../db/menu";

class MenuControllers {
  //Get Menu for the Single day
  static getMenu(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: menu
    });
  }
}

export default MenuControllers;
