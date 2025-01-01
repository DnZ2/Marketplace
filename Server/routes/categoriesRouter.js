const Router = require("express");
const categoriesRouter = new Router();
const categoriesController = require("../controllers/categoriesController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

categoriesRouter.get("/categories", categoriesController.getCategories);
categoriesRouter.post(
  "/categories",
  body("value")
    .isString()
    .matches(/^[\p{Lu}][\p{L}]{0,31}$/g),
  authMiddleware(["USER"]),
  categoriesController.postCategory
);
categoriesRouter.put(
  "/categories",
  body("value")
    .isString()
    .matches(/^[\p{Lu}][\p{L}]{0,31}$/g),
  authMiddleware(["USER"]),
  categoriesController.putCategory
);
categoriesRouter.delete(
  "/categories/:id",
  authMiddleware(["USER"]),
  categoriesController.deleteCategory
);

module.exports = categoriesRouter;
