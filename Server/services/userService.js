const User = require("../models/User");
const Role = require("../models/Role");
const Token = require("../models/Token");
const Order = require("../models/Order");
const uuid = require("uuid");
const mailService = require("./mailService");
const tokenService = require("./tokenService");
const UserDto = require("../dtos/userDto");
const OrderDto = require("../dtos/orderDto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ApiError = require("../exceptions/apiError");
const Product = require("../models/Product");
const { updateQuantity } = require("../dtos/productDto");

const registration = async (email, password) => {
  const candidate = await User.findOne({ email });
  if (candidate) {
    throw ApiError.BadRequest(
      `User with adress mail ${email} already registered`
    );
  }
  const hashPassword = bcrypt.hashSync(password, 7);
  const activationLink = uuid.v4();
  const userRole = await Role.findOne({ value: "USER" });
  const user = await User.create({
    email,
    password: hashPassword,
    activationLink,
    roles: [userRole.value],
  });
  await mailService.sendActivationMail(
    email,
    `${process.env.API_URL}/api/activate/${activationLink}`
  );
  const userDto = UserDto.createUserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};
const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw ApiError.BadRequest("User not found");
  }
  const isPassEqual = await bcrypt.compare(password, user.password);
  if (!isPassEqual) {
    throw ApiError.BadRequest("Wrong password");
  }
  const userDto = UserDto.createUserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};
const getUser = async (id) => {
  const user = await User.findById(id);
  return UserDto.createUserDto(user);
};
const logout = async (refreshToken) => {
  try {
    const token = await Token.deleteOne({ refreshToken });
    return token;
  } catch (e) {
    console.log(e);
  }
};
const activation = async (activationLink) => {
  try {
    const user = await User.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Wrong activation link");
    }
    user.isActivated = true;
    await user.save();
  } catch (e) {
    console.log(e);
  }
};
const refresh = async (refreshToken) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }
  const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  const tokenData = await Token.findOne({ refreshToken });
  if (!userData || !tokenData) {
    throw ApiError.UnauthorizedError();
  }
  const user = await User.findById(userData.id);
  const userDto = UserDto.createUserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};
const buyProducts = async (body) => {
  try {
    const user = await User.findById(body.userId);
    if (!user) {
      throw ApiError.BadRequest();
    }
    const returnLink = uuid.v4();
    await mailService.sendPaymentInfoMail(
      user.email,
      `${process.env.API_URL}/api/return/${returnLink}`
    );
    await Order.create({
      userId: body.userId,
      products: body.products,
      paymentAmount: body.paymentAmount,
      address: body.address,
      returnLink,
    });
    await Product.bulkWrite(updateQuantity(body.products));
  } catch (e) {
    console.log(e);
  }
};
const returnItems = async (returnLink) => {
  try {
    const order = await Order.findOne({ returnLink });
    if (!order) {
      throw ApiError.BadRequest("Wrong activation link");
    }
    if (order.isReturned) {
      return;
    }
    await Product.bulkWrite(updateQuantity(order.products, "inc"));
    order.isReturned = true;
    await order.save();
  } catch (e) {
    console.log(e);
  }
};
const getOrders = async (userId) => {
  const orders = await Order.find({ userId });
  const ordersDto = orders.map((order) => OrderDto.create(order));
  return ordersDto;
};
const patchUser = async (userId, userData) => {
  const user = await User.findById(userId);
  const isPassEqual = await bcrypt.compare(
    userData.currentPassword,
    user.password
  );
  if (!isPassEqual) {
    throw ApiError.BadRequest("Wrong password");
  }
  await user.save();
};

module.exports = {
  registration,
  login,
  getUser,
  patchUser,
  logout,
  activation,
  refresh,
  buyProducts,
  returnItems,
  getOrders,
};
