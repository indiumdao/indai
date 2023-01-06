require("hardhat-deploy");
require("dotenv").config();
require("hardhat-gas-reporter");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [],
      chainId: 5,
      blockConfirmations: 6,
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL,
      accounts: [],
      chainId: 1,
      blockConfirmations: 6,
    },
  },
  solidity: "0.6.0",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
