import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ecommerce", "root", "", {
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: "mysql",
});

export default sequelize;
