import { Item } from "../models/Item.js";

const createItem = async (name, description, price, id_budget) => {
    const item = await Item.create({ name, description, price, id_budget });
    return item.toJSON();
};
  
const getItems = async (id_budget) => {
    const items = await Item.findAll({ where: { id_budget } });
    const result = [];
    items.forEach((item) => {
        result.push(item.toJSON());
    });
    return result;
};

const getItemById = async (id) => {
    const item = await Item.findByPk(id);
    if (item) {
        return item.toJSON();
    } else {
        return null;
    }
};

const updateItem = async (id, name, description, price) => {
    const item = await Item.findByPk(id);
    if (item) {
        item.name = name;
        item.description = description;
        item.price = price;
        await item.save();
        return item.toJSON();
    } else {
        return null;
    }
};

const deleteItem = async (id) => {
    const item = await Item.findByPk(id);
    if (item) {
        await item.destroy();
        return item.toJSON();
    } else {
        return null;
    }
};

export {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem,
};