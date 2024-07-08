const create = (order) => {
  return {
    id: order._id,
    products: order.products,
    paymentAmount: order.paymentAmount,
    isReturned: order.isReturned,
    createdAt: order.createdAt,
    address: order.address,
  };
};
module.exports = {
  create,
};
