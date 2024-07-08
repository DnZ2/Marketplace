const createUserDto = (user) => {
  return {
    email: user.email,
    id: user._id,
    isActivated: user.isActivated,
    roles: [...user.roles],
  };
};
module.exports = {
  createUserDto,
};
