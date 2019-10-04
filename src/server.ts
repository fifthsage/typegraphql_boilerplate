import express from "express";
import session from "express-session";
import apollo from "./apollo";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import common from "../config/common";
import { authenticateJwt } from "./passport";
import databaseConn from "./helpers/databaseConn";

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

const getApp = async () => {
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

  app.listen(common.port, () => {
    console.log(`🚀 Server ready at ${common.port}`);
  });

  return app;
};

export default getApp;
