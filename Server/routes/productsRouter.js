const Router = require("express");
const productsRouter = new Router();
const productsController = require("../controllers/productsController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

productsRouter.get("/products", productsController.getProducts);
productsRouter.get("/products/:id", productsController.getProduct);
productsRouter.post(
  "/products",
  body("title").isString(),
  body("price").isNumeric(),
  body("maxQuantity").isNumeric(),
  body("category").isString(),
  body("description").isString().isLength({ min: 0, max: 1000 }),
  body("discount").isNumeric().isInt({ min: 0, max: 90 }),
  authMiddleware(["USER"]),
  productsController.postProducts
);
productsRouter.put(
  "/products/:id",
  body("title").isString(),
  body("price").isNumeric(),
  body("maxQuantity").isNumeric(),
  body("category").isString(),
  body("discount").isNumeric().isInt({ min: 0, max: 90 }),
  authMiddleware(["USER"]),
  productsController.patchProducts
);
productsRouter.delete(
  "/products/:id",
  authMiddleware(["USER"]),
  productsController.deleteProducts
);

module.exports = productsRouter;
