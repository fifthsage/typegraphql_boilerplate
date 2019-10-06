import common from "../config/common";
import server from "./server";

server().then(app =>
  app.listen(common.port, () =>
    console.log(`🚀 Server ready at ${common.port}`)
  )
);
