module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, "User unauthorized");
  }
  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
  static AlreadyCreatedProduct() {
    return new ApiError(409, "Already created product");
  }
  static AlreadyReviewedProduct() {
    return new ApiError(409, "Product");
  }
  static NotFound(message, errors = []) {
    return new ApiError(404, message, errors);
  }
};
