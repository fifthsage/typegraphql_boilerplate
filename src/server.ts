import cors from "cors";
import express from "express";
import session from "express-session";
import helmet from "helmet";
import logger from "morgan";
import common from "../config/common";
import apollo from "./apollo";
import databaseConn from "./helpers/databaseConn";
import { authenticateJwt } from "./passport";

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  })
);
app.use(
  cors({
    origin: common.corsDomain,
    optionsSuccessStatus: 200
  })
);

app.use(logger("dev"));
app.use(helmet());
app.use(authenticateJwt);

const prepareServer = async () => {
  try {
    const apolloServer = await apollo();

    apolloServer.applyMiddleware({
      app,
      path: "/api"
    });

    await databaseConn();
  } catch (e) {
    console.log(e);
  }

  return app;
};

export default async () => await prepareServer();
