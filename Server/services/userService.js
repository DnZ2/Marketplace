const User = require("../models/User");
const Order = require("../models/Order");
const uuid = require("uuid");
const mailService = require("./mailService");
const tokenService = require("./tokenService");
const UserDto = require("../dtos/userDto");
const OrderDto = require("../dtos/orderDto");
const bcrypt = require("bcryptjs");
const ApiError = require("../exceptions/apiError");
const Product = require("../models/Product");
const { updateQuantity } = require("../dtos/productDto");

const getUser = async (token) => {
  const tokenData = tokenService.validateAccessToken(token);
  const user = await User.findById(tokenData.id);
  return UserDto.createUserDto(user);
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

const buyProducts = async (body, token) => {
  try {
    const tokenData = tokenService.validateAccessToken(token);
    const user = await User.findById(tokenData.id);
    if (!user) {
      throw ApiError.BadRequest();
    }
    const returnLink = uuid.v4();
    await mailService.sendPaymentInfoMail(
      user.email,
      `${process.env.API_URL}/api/return/${returnLink}`
    );
    const order = await Order.create({
      ...body,
      userId: tokenData.id,
      returnLink,
    });
    await Product.bulkWrite(updateQuantity(body.products));
    return OrderDto.create(order);
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

const getOrders = async (token) => {
  const userId = tokenService.validateAccessToken(token).id;
  const orders = await Order.find({ userId });
  const ordersDto = orders.map((order) => OrderDto.create(order));
  return ordersDto;
};

const editUser = async (userData) => {
  const user = await User.findOne({ email: userData.email });
  const isPassEqual = await bcrypt.compare(
    userData.currentPassword,
    user.password
  );
  if (!isPassEqual) {
    throw ApiError.BadRequest("Wrong password");
  }
  const hashPassword = bcrypt.hashSync(userData.password, 7);
  user.username = userData.username;
  user.address = userData.address;
  user.email = userData.email;
  user.password = hashPassword;
  await user.save();
  return UserDto.createUserDto({ ...user, ...userData });
};

module.exports = {
  getUser,
  editUser,
  activation,
  buyProducts,
  returnItems,
  getOrders,
};
