import User from './models/User.js';

// CREATE
async function createUser(name, lastName, email, password) {
  const user = await User.create({ name, lastName, email, password });
  return user.toJSON();
}

// READ
async function getUsers() {
  const users = await User.findAll();
  const result = [];
  for (const user of users) {
    result.push(user.toJSON());
  }
  return result;
}

async function getUserById(id) {
  const user = await User.findByPk(id);
  if (user) {
    return user.toJSON();
  } else {
    return null;
  }
}

// UPDATE
async function updateUser(id, name, lastName, email, password) {
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

// DELETE
async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return user.toJSON();
  } else {
    return null;
  }
}

// USER CHECK
async function userCheck(email, password) {
  const user = await User.findOne({ where: { email, password } });
  return user !== null;
}

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  userCheck,
};
