const create = (product) => {
  return {
    id: product._id,
    title: product.title,
    price: parseFloat(product.stockPrice.toFixed(1)),
    currentPrice: parseFloat(product.price.toFixed(1)),
    maxQuantity: product.maxQuantity,
    description: product.description,
    discount: product.discount,
    rating: product.rating,
    category: product.category,
    createdAt: product.createdAt,
  };
};
const updateQuantity = (array, type) => {
  const updates = array.map((item) => ({
    updateMany: {
      filter: { _id: item.productId },
      update: {
        $inc: { maxQuantity: type === "inc" ? item.quantity : -item.quantity },
      },
    },
  }));
  return updates;
};
const updateCategories = (array, value) => {
  const updates = array.map(() => ({
    updateMany: {
      update: { value },
    },
  }));
  return updates;
};
module.exports = {
  create,
  updateQuantity,
  updateCategories,
};
