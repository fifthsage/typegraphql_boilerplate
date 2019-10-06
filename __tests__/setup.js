import server from "../src/server";

export const setup = async () => {
  const apiServer = await server();
  apiServer.listen(5000);
  console.log("server started");
};
