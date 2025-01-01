const ApiError = require("../exceptions/apiError");
const reviewService = require("../services/reviewService");
const { validationResult } = require("express-validator");

const getProductReviews = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reviews = await reviewService.getProductReviews(id);
    return res.json(reviews);
  } catch (e) {
    next(e);
  }
};
const getUserReviews = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const reviews = await reviewService.getUserReviews(token);
    return res.json(reviews);
  } catch (e) {
    next(e);
  }
};
const postReview = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const { userId, productId, reviewText = "", ratingValue } = req.body;
    const review = await reviewService.postReview(
      userId,
      productId,
      reviewText,
      ratingValue
    );
    return res.json(review);
  } catch (e) {
    next(e);
  }
};
const patchReview = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const reviewId = req.params.id;
    const { userId, text = "", rating } = req.body;
    const review = await reviewService.patchReview(
      userId,
      reviewId,
      text,
      rating
    );
    return res.json(review);
  } catch (e) {
    next(e);
  }
};
const deleteReview = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { userId } = req.body;
    const review = await reviewService.deleteReview(userId, id);
    return res.json(review);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getProductReviews,
  getUserReviews,
  postReview,
  patchReview,
  deleteReview,
};
