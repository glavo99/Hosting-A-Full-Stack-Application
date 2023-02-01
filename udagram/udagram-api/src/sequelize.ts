import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  `postgres://${config.username}:${config.password}@${config.endpoint}:${Number(
    config.port
  )}/${config.database}`
);
