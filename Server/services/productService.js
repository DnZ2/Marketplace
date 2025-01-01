const ApiError = require("../exceptions/apiError");
const Product = require("../models/Product");
const ProductDto = require("../dtos/productDto");
const Category = require("../models/Category");
const getProducts = async (
  page,
  limit,
  category,
  sort,
  sortMethod,
  search,
  minPrice,
  maxPrice
) => {
  try {
    const allProducts = await Product.find(
      {
        title: { $regex: search },
        category: category !== "" ? category : { $regex: category },
        price: { $gte: Number(minPrice), $lte: Number(maxPrice) },
      },
      null,
      {
        skip: limit * (page - 1),
        limit,
        sort: { [sort]: Number(sortMethod) },
      }
    );
    const countProducts = await Product.countDocuments({
      title: { $regex: search },
      category: { $regex: category },
      price: { $gte: Number(minPrice), $lte: Number(maxPrice) },
    });

    const countPages = Math.ceil(countProducts / limit);
    const products = allProducts.map((item) => ProductDto.create(item));
    return { products, pages: countPages };
  } catch (e) {
    console.log(e);
  }
};
const postProducts = async (
  title,
  price,
  maxQuantity,
  category,
  description,
  discount
) => {
  const titleCandidate = await Product.findOne({ title });
  if (titleCandidate) {
    throw ApiError.AlreadyCreatedProduct();
  }
  const categoryCandidate = await Category.findOne({ value: category });
  if (!categoryCandidate) {
    throw ApiError.NotFound();
  }

  const product = await Product.create({
    title,
    price: parseFloat((price - (price * discount) / 100).toFixed(1)),
    stockPrice: price,
    maxQuantity,
    category,
    description,
    discount,
  });
};
const patchProducts = async (
  id,
  title,
  price,
  maxQuantity,
  category,
  discount
) => {
  try {
    const titleCandidate = await Product.findOne({ title });
    if (titleCandidate && titleCandidate._id.toString() !== id) {
      throw ApiError.AlreadyCreatedProduct();
    }
    const categoryCandidate = await Category.findOne({ value: category });
    if (!categoryCandidate) {
      throw ApiError.NotFound();
    }
    const product = await Product.findById(id);
    if (!product) {
      throw ApiError.NotFound();
    }
    product.title = title;
    product.stockPrice = price;
    product.price = parseFloat((price - (price * discount) / 100).toFixed(1));
    product.maxQuantity = maxQuantity;
    product.category = category;
    product.discount = discount;
    await product.save();
  } catch (e) {
    console.log(e);
  }
};
const deleteProducts = async (id) => {
  try {
    const result = await Product.deleteOne({ _id: id });
    return result;
  } catch (e) {
    console.log(e);
  }
};
const getProduct = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw ApiError.NotFound();
  }
  const productDto = ProductDto.create(product);
  return productDto;
};

module.exports = {
  getProducts,
  postProducts,
  patchProducts,
  deleteProducts,
  getProduct,
};
