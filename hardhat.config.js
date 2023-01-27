require("hardhat-deploy");
require("dotenv").config();
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy-ethers");
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
      accounts: [PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 1,
      blockConfirmations: 6,
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.6.12",
      },
      {
        version: "0.4.15",
      },
    ],
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
