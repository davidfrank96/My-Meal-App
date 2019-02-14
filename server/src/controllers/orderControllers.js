import orders from "../db/orders";

class OrderControllers {
  //Get Orders for the day
  static getOrder(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: orders
    });
  }
}

export default OrderControllers;
