const { network } = require("hardhat");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const indai = await deploy("Indai", {
    from: deployer,
    args: ["1"],
    log: true,
  });
};

module.exports.tags = ["all", "indai"];
