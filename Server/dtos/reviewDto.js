const createProductReview = (review) => {
  return {
    id: review._id,
    userId: {
      id: review.userId._id,
      email: review.userId.email,
      roles: review.userId.roles,
    },
    productId: review.productId,
    text: review.text,
    rating: review.rating,
    createdAt: review.createdAt,
  };
};
const createUserReview = (review) => {
  return {
    id: review._id,
    userId: review.userId,
    productId: {
      id: review.productId._id,
      title: review.productId.title,
      price: review.productId.price,
      category: review.productId.category,
    },
    text: review.text,
    rating: review.rating,
    createdAt: review.createdAt,
  };
};
module.exports = {
  createProductReview,
  createUserReview,
};
