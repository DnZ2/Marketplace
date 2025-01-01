const Router = require("express");
const userRouter = new Router();
const usersController = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");
const { body } = require("express-validator");

userRouter.get("/activate/:link", usersController.activation);
userRouter.get("/user", authMiddleware(["USER"]), usersController.getUser);
userRouter.put(
  "/user",
  body("username").isString().isLength({ min: 3, max: 32 }),
  body("email").isString(),
  body("address").isString(),
  body("password").isString().isLength({ min: 3, max: 32 }),
  authMiddleware(["USER"]),
  usersController.editUser
);
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
