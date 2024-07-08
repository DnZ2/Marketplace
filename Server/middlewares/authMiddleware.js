const ApiError = require("../exceptions/apiError");
const tokenService = require("../services/tokenService");
module.exports = function (roles) {
  return function (req, res, next) {
    try {
      if (req.method === "OPTIONS") {
        next();
      }
      const header = req.headers.authorization;
      if (!header) {
        return next(ApiError.UnauthorizedError());
      }
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return next(ApiError.UnauthorizedError());
      }
      const { roles: userRoles } = tokenService.validateAccessToken(token);
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        return next(ApiError.BadRequest("You do not have access"));
      }
      next();
    } catch (e) {
      console.log(e);
      return next(ApiError.UnauthorizedError());
    }
  };
};
