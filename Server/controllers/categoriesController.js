const categoriesService = require("../services/categoriesService");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/apiError");

const getCategories = async (req, res, next) => {
  try {
    const categories = await categoriesService.getCategories();
    return res.json(categories);
  } catch (e) {
    next(e);
  }
};
const postCategory = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const body = req.body;
    const newCategory = await categoriesService.postCategory(body);
    return res.json(newCategory);
  } catch (e) {
    next(e);
  }
};
const putCategory = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const body = req.body;
    const newCategory = await categoriesService.putCategory(body);
    return res.json(newCategory);
  } catch (e) {
    next(e);
  }
};
const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleted = await categoriesService.deleteCategory(id);
    return res.json(deleted);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getCategories,
  postCategory,
  putCategory,
  deleteCategory,
};
