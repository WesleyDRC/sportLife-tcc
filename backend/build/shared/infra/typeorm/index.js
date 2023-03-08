"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
/* eslint-disable no-debugger, no-console */
require("mysql2");
const User_1 = require("../../../modules/auth/infra/typeorm/entities/User");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [User_1.User],
    synchronize: true,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log(`Database connected!\n Host: ${process.env.DB_HOST}`);
})
    .catch((error) => console.log(error));
