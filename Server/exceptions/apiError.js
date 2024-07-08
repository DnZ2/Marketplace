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
  static BadRequest() {
    return new ApiError(400, "Bad request", errors);
  }
  static AlreadyCreatedProduct() {
    return new ApiError(409, "Already created title");
  }
  static NotFound() {
    return new ApiError(404, message, errors);
  }
};
