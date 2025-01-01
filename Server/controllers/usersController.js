const userService = require("../services/userService");
const { validationResult } = require("express-validator");
const getUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = await userService.getUser(token);
    return res.json(user);
  } catch (e) {
    next(e);
  }
};
const activation = async (req, res, next) => {
  try {
    const activationLink = req.params.link;
    await userService.activation(activationLink);
    return res.redirect(process.env.CLIENT_URL);
  } catch (e) {
    next(e);
  }
};
const buyProducts = async (req, res, next) => {
  try {
    const body = req.body;
    const response = userService.buyProducts(body);
    return res.json(response);
  } catch (e) {
    next(e);
  }
};
const returnProduct = async (req, res, next) => {
  try {
    const link = req.params.link;
    await userService.returnItems(link);
    return res.redirect(process.env.CLIENT_URL);
  } catch (e) {
    next(e);
  }
};
const getOrders = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const orders = await userService.getOrders(userId);
    return res.json(orders);
  } catch (e) {
    next(e);
  }
};
const editUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const userData = await userService.editUser(req.body);
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUser,
  activation,
  buyProducts,
  returnProduct,
  getOrders,
  editUser,
};
