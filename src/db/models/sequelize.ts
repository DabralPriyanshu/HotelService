import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";

const sequelize = new Sequelize({
  dialect: "mysql",
  username: dbConfig.DB_USER,
  password: dbConfig.DB_PASSWORD,
  database: dbConfig.DB_NAME,
  host: dbConfig.DB_HOST,
  logging: true,
});
export default sequelize;
