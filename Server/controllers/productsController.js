const Product = require("../models/Product");
const productService = require("../services/productService");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/apiError");

const getProducts = async (req, res, next) => {
  try {
    const to = await Product.find().sort({ price: -1 }).limit(1);
    const from = await Product.find().sort({ price: 1 }).limit(1);
    const maxPrice = req.query.maxPrice || to[0].price;
    const minPrice = req.query.minPrice || from[0].price;
    const {
      page = 1,
      limit = 10,
      category = "",
      sort = "price",
      sortMethod = 1,
      search = "",
    } = req.query;
    const products = await productService.getProducts(
      page,
      limit,
      category,
      sort,
      sortMethod,
      search,
      minPrice,
      maxPrice
    );
    return res.json({
      ...products,
      diapason: { to: to[0].price, from: from[0].price },
    });
  } catch (e) {
    next(e);
  }
};
const postProducts = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const {
      title,
      price,
      maxQuantity,
      category,
      description = "",
      discount = 0,
    } = req.body;
    const product = await productService.postProducts(
      title,
      price,
      maxQuantity,
      category,
      description,
      discount
    );
    return res.json(product);
  } catch (e) {
    next(e);
  }
};
const patchProducts = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    const id = req.params.id;
    const { title, price, maxQuantity, category, discount } = req.body;
    const product = await productService.patchProducts(
      id,
      title,
      price,
      maxQuantity,
      category,
      discount
    );
    return res.json(product);
  } catch (e) {
    next(e);
  }
};
const deleteProducts = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await productService.deleteProducts(id);
    return res.json(result);
  } catch (e) {
    next(e);
  }
};
const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await productService.getProduct(id);
    return res.json(product);
  } catch (e) {
    next(e);
  }
};
const getCategories = async (req, res, next) => {
  try {
    const categories = await productService.getCategories();
    return res.json(categories);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  postProducts,
  patchProducts,
  getProducts,
  deleteProducts,
  getProduct,
  getCategories,
};
