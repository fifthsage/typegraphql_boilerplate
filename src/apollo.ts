import { ApolloServer } from "apollo-server-express";
import Container from "typedi";
import * as TypeORM from "typeorm";
import { buildSchema } from "type-graphql";
import path from "path";
import { authChecker } from "./api/authorization/auth-checker";
import { ErrorLoggerMiddleware } from "./api/middlewares/error-logger";

export default async () => {
  TypeORM.useContainer(Container);

  const schema = await buildSchema({
    resolvers: [__dirname + "/api/**/*.resolver.ts"],
    authChecker,
    globalMiddlewares: [ErrorLoggerMiddleware],
    container: Container,
    emitSchemaFile: path.resolve(__dirname, "schema.gql")
  });

  return new ApolloServer({
    schema,
    context: ({ req }) => ({ request: req }),
    playground: {
      endpoint: "http://localhost:5000/api",
      settings: {
        "editor.theme": "dark"
      }
    }
  });
};
