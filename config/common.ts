require("dotenv").config();

export default {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT as string, 10) || 5000,
  corsDomain: process.env.CORS_DOMAIN || "*"
};
