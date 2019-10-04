require("dotenv").config();

export default {
  mysql: {
    default: {
      host: process.env.DB_HOST || "127.0.0.1",
      db: process.env.DB_DATABASE || "db",
      user: process.env.DB_USER || "user",
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 3306
    },
    test: {
      host: process.env.DB_HOST || "127.0.0.1",
      db: `${process.env.DB_DATABASE || "db"}_test`,
      user: process.env.DB_USER || "user",
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 3306
    }
  },
  redis: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    user: process.env.REDIS_USER || "user",
    password: process.env.REDIS_PASSWORD,
    port: process.env.REDIS_PORT || 6379
  }
};
