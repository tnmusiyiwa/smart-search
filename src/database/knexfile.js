require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME || "entities",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "Administrator05",
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT || "5433",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
