const create = (product) => {
  return {
    id: product._id,
    title: product.title,
    price: product.price,
    maxQuantity: product.maxQuantity,
    description: product.description,
    discount: product.discount,
    rating: product.rating,
    category: product.category,
    settings: product.settings,
  };
};
module.exports = {
  create,
};
