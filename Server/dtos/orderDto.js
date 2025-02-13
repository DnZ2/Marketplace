const { convertDate } = require("../utils/helpers");
const create = (order) => {
  const products = order.products.map(({ _doc: { _id, ...product } }) => ({
    ...product,
    totalPrice: parseFloat(
      (product.price * product.quantity).toFixed(1)
    ),
  }));
  return {
    id: order._id,
    products: products,
    paymentAmount: parseFloat(order.paymentAmount.toFixed(1)),
    isReturned: order.isReturned,
    createdAt: convertDate(order.createdAt),
    address: order.address,
  };
};
module.exports = {
  create,
};
