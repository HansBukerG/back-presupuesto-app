import { Budget } from "../models/Budget.js";

const createBudget = async (name, description, id_user) => {
  const budget = await Budget.create({ name, description, id_user });
  return budget.toJSON();
};

const getBudgets = async (id_user) => {
  const budgets = await Budget.findAll({ where : { id_user } });
  const result = [];
  budgets.forEach((budget) => {
    result.push(budget.toJSON());
  });
  return result;
};

const getBudgetById = async (id) => {
  const budget = await Budget.findByPk(id);
  if (budget) {
    return budget.toJSON();
  } else {
    return null;
  }
};

const updateBudget = async (id, name, description, id_user) => {
  const budget = await Budget.findByPk(id);
  if (budget) {
    budget.name = name;
    budget.description = description;
    budget.id_user = id_user;
    await budget.save();
    return budget.toJSON();
  } else {
    return null;
  }
};

const deleteBudget = async (id) => {
  const budget = await Budget.findByPk(id);
  if (budget) {
    await budget.destroy();
    return budget.toJSON();
  } else {
    return null;
  }
};

export {
  createBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
};