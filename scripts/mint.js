const { network, ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts }) => {
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  // Basic NFT
  const dai = await ethers.getContract("Dai", deployer);
  const daitx = await dai.mint();
  await dai.wait("0x76677d82Cba9d7F2BB40670456AbaD808778635c", "1");
};
module.exports.tags = ["all", "mint"];
