const { network } = require("hardhat");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = await deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const abaci = await deploy("LinearDecrease", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const abaci2 = await deploy("StairstepExponentialDecrease", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const abaci3 = await deploy("ExponentialDecrease", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const vat = await deploy("Vat", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const cat = await deploy("LibNote", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const cat2 = await deploy("Cat", {
    from: deployer,
    args: ["0x310dbaab8dde911c229821a997ff8b3b1d37ae1c"],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const spot = await deploy("Spotter", {
    from: deployer,
    args: ["0x310dbaab8dde911c229821a997ff8b3b1d37ae1c"],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const dog = await deploy("Dog", {
    from: deployer,
    args: ["0x310dbaab8dde911c229821a997ff8b3b1d37ae1c"],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const clip = await deploy("Clipper", {
    from: deployer,
    args: [
      "0x310dbaab8dde911c229821a997ff8b3b1d37ae1c",
      "0x6f2155b03020621B3796150f6b3792Bc8ABb8844",
      "0xaD2A9E0C3C732D4De17bE93F44b742b113c710b9",
      "0x4554482d41000000000000000000000000000000000000000000000000000000",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const cure = await deploy("Cure", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const dai = await deploy("Dai", {
    from: deployer,
    args: ["5"],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const end = await deploy("End", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const flap = await deploy("Flapper", {
    from: deployer,
    args: ["0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C", ""],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });
};

module.exports.tags = ["all", "main"];
