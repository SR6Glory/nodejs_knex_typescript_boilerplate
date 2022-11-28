import connection, { Knex } from "knex";
const dotenv = require("dotenv");
dotenv.config();

interface KnexConfig {
  [key: string]: object;
}

const knexConfig: KnexConfig = {
  production: {
    client: "mysql2",
    connection: process.env.MYSQL_DEFAULT,
    pool: { min: 2, max: 10 },
    migrations: {
      extension: "ts",
      disableMigrationsListValidation: true,
    },
  },
};

const knex: Knex = connection(knexConfig["production"]);

export default knex;
