const Router = require("express");
const reviewsRouter = new Router();
const reviewsController = require("../controllers/reviewController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");


reviewsRouter.get("/review/product/:id", reviewsController.getProductReviews);
reviewsRouter.get(
  "/review/user/:id",
  authMiddleware(["USER"]),
  reviewsController.getUserReviews
);
reviewsRouter.post(
  "/review",
  body("text").isString().isLength({ min: 0, max: 1000 }),
  body("rating").isNumeric().isInt({ min: 1, max: 5 }),
  authMiddleware(["USER"]),
  reviewsController.postReview
);
reviewsRouter.put(
  "/review/:id",
  body("text").isString().isLength({ min: 0, max: 1000 }),
  body("rating").isNumeric().isInt({ min: 1, max: 5 }),
  authMiddleware(["USER"]),
  reviewsController.patchReview
);
reviewsRouter.delete(
  "/review/:id",
  authMiddleware(["USER"]),
  reviewsController.deleteReview
);

module.exports = reviewsRouter;