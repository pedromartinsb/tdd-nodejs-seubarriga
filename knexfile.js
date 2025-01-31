module.exports = {
  test: {
    client: "pg",
    version: "11",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "tdd-nodejs-seubarriga",
    },
    migrations: {
      directory: "./src/migrations",
    },
  },
};
