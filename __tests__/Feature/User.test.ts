// import request from "supertest";
import { request } from "graphql-request";

describe("User api", () => {
  it("users", async () => {
    const response = await request(
      process.env.TEST_HOST as string,
      `query {
          users {
            id
            userName
            createdAt
            updatedAt
          }
        }`
    );

    expect(response).toMatchSnapshot();
    expect(Object.keys(response)).toStrictEqual(["users"]);
  });
});
