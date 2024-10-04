const ApiError = require("../exceptions/apiError");
const userService = require("../services/userService");
const { validationResult } = require("express-validator");
const registration = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const { email, password } = req.body;
    const userData = await userService.registration(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await userService.login(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.getUser(id);
    return res.json(user);
  } catch (e) {
    next(e);
  }
};
const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await userService.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  } catch (e) {
    next(e);
  }
};
const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await userService.refresh(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
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

module.exports = {
  registration,
  login,
  getUser,
  logout,
  refresh,
  activation,
  buyProducts,
  returnProduct,
  getOrders,
};
