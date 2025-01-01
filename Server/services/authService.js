const User = require("../models/User");
const Role = require("../models/Role");
const Token = require("../models/Token");
const uuid = require("uuid");
const mailService = require("./mailService");
const tokenService = require("./tokenService");
const UserDto = require("../dtos/userDto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ApiError = require("../exceptions/apiError");

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
const logout = async (refreshToken) => {
  try {
    const token = await Token.deleteOne({ refreshToken });
    return token;
  } catch (e) {
    console.log(e);
  }
};
const refresh = async (refreshToken) => {
  if (!refreshToken) {
    await Token.deleteOne({ refreshToken });
    throw ApiError.UnauthorizedError();
  }
  const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  const tokenData = await Token.findOne({ refreshToken });
  if (!userData || !tokenData) {
    await Token.deleteOne({ refreshToken });
    throw ApiError.UnauthorizedError();
  }
  const user = await User.findById(userData.id);
  const userDto = UserDto.createUserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};

module.exports = {
  registration,
  login,
  logout,
  refresh,
};
