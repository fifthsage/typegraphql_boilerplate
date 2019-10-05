import { closeDatabaseConn } from "../../src/helpers/databaseConn";
import databaseConn from "../../src/helpers/databaseConn";
import User from "../../src/entities/User";

beforeAll(async () => {
  await databaseConn();
});

afterAll(async () => {
  await closeDatabaseConn();
});

describe("User entity", () => {
  it("User / count", async () => {
    const count = await User.count();

    expect(count).toBe(0);
  });
});
