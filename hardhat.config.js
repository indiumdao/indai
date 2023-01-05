require("hardhat-deploy");
require("dotenv").config();
require("hardhat-gas-reporter");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
module.exports = {
  solidity: "0.6.0",
};
