const Router = require("express");
const userRouter = new Router();
const usersController = require("../controllers/usersController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

userRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 4, max: 32 }),
  usersController.registration
);
userRouter.post("/login", usersController.login);
userRouter.post("/logout", usersController.logout);
userRouter.get("/activate/:link", usersController.activation);
userRouter.get("/refresh", usersController.refresh);
userRouter.get("/user/:id", authMiddleware(["USER"]), usersController.getUser);
userRouter.post(
  "/buyProducts",
  authMiddleware(["USER"]),
  usersController.buyProducts
);
userRouter.get("/return/:link", usersController.returnProduct);
userRouter.get(
  "/orders/:id",
  authMiddleware(["USER"]),
  usersController.getOrders
);

module.exports = userRouter;
