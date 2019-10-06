require("ts-node/register");

const { setup } = require("./setup");

module.exports = async function() {
  await setup();
  return null;
};
