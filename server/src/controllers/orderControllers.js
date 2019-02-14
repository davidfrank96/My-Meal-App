import orders from "../db/orders";

class OrderControllers {
  //Get Orders for the day
  static getOrder(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: orders
    });
  }

  // put/Patch for updating the info of an order
  static updateOrderName(req, res) {
    const findOrder = orders.find(
      order => order.id === parseInt(req.params.id, 10)
    );
    if (findOrder) {
      delete findOrder.name;
      findOrder.name = req.body.name;

      return res.status(200).json({
        status: res.statusCode,
        data: [
          {
            id: findOrder.id,
            name: findOrder.name,
            plates: findOrder.plates,
            price: findOrder.price
          }
        ]
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      message: "Order  not found"
    });
    }

    // Post/add an Order for the day
    static postOrder(req, res) {
        if (!req.body.name) {
            return res.status(400).send({
                status: res.statusCode,
                message: "Meal name is required"
            });
        }
        const newOrder = {
          id: req.body.id,
          name: req.body.name,
          plates: req.body.plates,
          price: req.body.price
        };
        orders.push(newOrder);
        return res.status(201).json({
            status: res.statusCode,
            data: [
                {
                    id: newOrder.id,
                    name: newOrder.name,
                    plates: newOrder.plates,
                    price: newOrder.price
                }
            ]
        });
    }

}

export default OrderControllers;
