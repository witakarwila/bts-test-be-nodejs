module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "secret12345",
    DB: "bts-test",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };