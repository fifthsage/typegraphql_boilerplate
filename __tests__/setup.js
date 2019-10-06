process.env.NODE_ENV = "test";
process.env.TEST_HOST = `http://127.0.0.1:5000/api`;

import server from "../src/server";

export const setup = async () => {
  const apiServer = await server();
  apiServer.listen(5000);
  console.log("server started");
};
