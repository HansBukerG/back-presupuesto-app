import { User } from "../models/User.js";


const createUser = async (name, lastName, email, password) => {
  const user = await User.create({ name, lastName, email, password });
  return user.toJSON();
};

const getUsers = async () => {
  const users = await User.findAll();
  const result = [];
  for (const user of users) {
    result.push(user.toJSON());
  }
  return result;
}

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    return user.toJSON();
  } else {
    return null;
  }
}

const updateUser = async (id, name, lastName, email, password) => {
  const user = await User.findByPk(id);
  if (user) {
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    await user.save();
    return user.toJSON();
  } else {
    return null;
  }
}

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return user.toJSON();
  } else {
    return null;
  }
}

const userCheck = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user !== null;
}

const loginCheck = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
}

export {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  userCheck,
  loginCheck
};
