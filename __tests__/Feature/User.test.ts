import request from "supertest";
import server from "../../src/server";

let app: any, apiServer: any;

beforeAll(async done => {
  const instance = await server();

  app = instance.app;

  apiServer = app.listen(done);
});

afterAll(async done => {
  await apiServer.close(done);
});

describe("User api", () => {
  it("users", async done => {
    const response = await request(app)
      .post("/api")
      .send({
        query: `query {
            users {
              id
              userName
              createdAt
              updatedAt
            }
          }`
      })
      .expect(200);

    expect(response.body).toMatchSnapshot();
    expect(Object.keys(response.body)).toStrictEqual(["data"]);
    expect(Object.keys(response.body.data)).toStrictEqual(["users"]);
    done();
  });
});
