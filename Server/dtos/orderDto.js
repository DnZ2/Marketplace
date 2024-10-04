const create = (order) => {
  const products = order.products.map((item) => ({
    ...item._doc,
    totalPrice: parseFloat((item._doc.price * item._doc.quantity).toFixed(1)),
  }));
  return {
    id: order._id,
    products: products,
    paymentAmount: parseFloat(order.paymentAmount.toFixed(1)),
    isReturned: order.isReturned,
    createdAt: order.createdAt,
    address: order.address,
  };
};
module.exports = {
  create,
};
