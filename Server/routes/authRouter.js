const Router = require("express");
const authRouter = new Router();
const authController = require("../controllers/authController");
const { body } = require("express-validator");

authRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 4, max: 32 }),
  authController.registration
);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);
authRouter.post("/refresh", authController.refresh);

module.exports = authRouter;
