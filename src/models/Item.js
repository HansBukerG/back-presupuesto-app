import { DataTypes } from 'sequelize';
import sequelize from '../database/dbConnect.database.js';
import { Budget } from './Budget.js';

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_budget: {
    type: DataTypes.INTEGER,
    references: {
      model: Budget,
      key: 'id',
    },
    allowNull: false,
  },
});

export { Item };
