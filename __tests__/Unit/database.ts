import { closeDatabaseConn } from "../../src/helpers/databaseConn";
import databaseConn from "../../src/helpers/databaseConn";

beforeAll(async () => {
  await databaseConn();
});

afterAll(async () => {
  await closeDatabaseConn();
});
