const { updateCategories } = require("../dtos/productDto");
const ApiError = require("../exceptions/apiError");
const Category = require("../models/Category");
const Product = require("../models/Product");

const getCategories = async () => {
  const categories = await Category.find();
  const categoriesDto = categories.map((item) => item.value);
  return categoriesDto;
};
const postCategory = async (body) => {
  const isCategory = await Category.find({ value: body.value });
  if (isCategory) throw ApiError.AlreadyCreatedProduct();
  const newCategory = await Category.create({ value: body.value });
  return newCategory.value;
};
const putCategory = async (body) => {
  const productsByCategory = Product.find({ category: body.prev });
  const isCategory = await Category.find({ value: body.value });
  const category = await Category.findById(body.id);
  if (isCategory) throw ApiError.AlreadyCreatedProduct();
  category.value = body.value;
  await Product.bulkWrite(updateCategories(productsByCategory, body.value));
  await category.save();
  return category.value;
};
const deleteCategory = async (id) => {
  await Category.findByIdAndDelete(id);
  return id;
};
module.exports = {
  getCategories,
  postCategory,
  putCategory,
  deleteCategory,
};
