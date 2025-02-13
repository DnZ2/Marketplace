const createUserDto = (user) => {
  return {
    username: user.username,
    address: user.address,
    email: user.email,
    id: user._id,
    isActivated: user.isActivated,
    roles: [...user.roles],
  };
};
module.exports = {
  createUserDto,
};
