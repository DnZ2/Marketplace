const authService = require("../services/authService");
const ApiError = require("../exceptions/apiError");
const { validationResult } = require("express-validator");
const registration = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const { email, password } = req.body;
    const userData = await authService.registration(email, password);
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
    const userData = await authService.login(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await authService.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  } catch (e) {
    next(e);
  }
};
const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await authService.refresh(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  registration,
  login,
  logout,
  refresh,
};
