import {Sequelize} from 'sequelize';

const database = process.env.PG_DATABASE
const user = process.env.PG_USER
const password = process.env.PG_PASSWORD
const host = process.env.PG_HOST
const port = process.env.PG_PORT
const dialect = process.env.PG_DIALECT

const sequelize = new Sequelize(
    database,
    user,
    password,
    {
      host: host,
      port: port,
      dialect: dialect,
      dialectOptions: {},
      pool: {
        max: 10,
        min: 0,
        idle: 200000,
        acquire: 1000000,
      },
      logging: true,
    },
  );

export default sequelize;