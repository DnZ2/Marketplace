const create = (category) => {
  return {
    id: category._id,
    value: category.value,
  };
};
module.exports = {
  create,
};
