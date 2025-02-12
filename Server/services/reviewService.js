const ApiError = require("../exceptions/apiError");
const Review = require("../models/Review");
const ReviewDTO = require("../dtos/reviewDto");
const Product = require("../models/Product");
const User = require("../models/User");
const Order = require("../models/Order");
const tokenService = require("../services/tokenService");
const getProductReviews = async (productId) => {
  try {
    const productReviews = await Review.find({ productId }).populate("userId");
    if (!productReviews.length) {
      return [];
    }
    const reviewDto = productReviews.map((item) =>
      ReviewDTO.createProductReview(item)
    );
    return reviewDto;
  } catch (e) {
    console.log(e);
  }
};
const getUserReviews = async (token) => {
  try {
    const userId = tokenService.validateAccessToken(token).id;
    const userReviews = await Review.find({ userId }).populate("productId");
    if (!userReviews.length) {
      return [];
    }
    const reviewDto = userReviews.map((item) =>
      ReviewDTO.createUserReview(item)
    );
    return reviewDto;
  } catch (e) {
    console.log(e);
  }
};
const postReview = async (productId, orderId, reviewText, ratingValue, token) => {
  try {
    const userId = tokenService.validateAccessToken(token).id;
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    const order = await Order.findById(orderId);
    if (!user || !product) {
      throw ApiError.BadRequest("Product is not defined");
    }
    if (order.isReviewed) {
      throw ApiError.BadRequest("Already reviewed. You can patch your review");
    }
    const review = await Review.create({
      userId,
      productId,
      reviewText,
      rating: ratingValue,
    });
    product.rating = {
      ...product.rating,
      [ratingValue]: product.rating[ratingValue] + 1,
    };
    order.isReviewed = true;
    await order.save();
    await product.save();
    return {
      product: ReviewDTO.createProductReview(review),
      user: ReviewDTO.createUserReview(review),
    };
  } catch (e) {
    console.log(e);
  }
};
const patchReview = async (reviewId, reviewText, ratingValue, token) => {
  try {
    const userId = tokenService.validateAccessToken(token).id;
    const review = await Review.findById(reviewId);
    const user = await User.findById(userId);
    const product = await Product.findById(review.productId.toString());
    if (!user || !product || !review) {
      throw ApiError.BadRequest();
    }
    product.rating = {
      ...product.rating,
      [review.rating]: product.rating[review.rating] - 1,
    };
    review.reviewText = reviewText;
    review.rating = ratingValue;
    product.rating = {
      ...product.rating,
      [review.rating]: product.rating[review.rating] + 1,
    };
    product.rating[ratingValue]++;
    await product.save();
    await review.save();
    return "success";
  } catch (e) {
    console.log(e);
  }
};
const deleteReview = async (reviewId, token) => {
  try {
    const userId = tokenService.validateAccessToken(token).id;
    const review = await Review.findById(reviewId);
    const user = await User.findById(userId);
    const product = await Product.findById(review.productId);
    if (!user || !review || !product) {
      throw ApiError.BadRequest();
    }
    product.rating = {
      ...product.rating,
      [review.rating]: product.rating[review.rating] - 1,
    };
    await product.save();
    await Review.findByIdAndDelete(reviewId);
    return "success";
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getProductReviews,
  getUserReviews,
  postReview,
  patchReview,
  deleteReview,
};
