require("ts-node/register");

process.env.TEST_HOST = `http://127.0.0.1:5000/api`;

const { setup } = require("./setup");

module.exports = async function() {
  await setup();
  return null;
};
