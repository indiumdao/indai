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
    args: [
      "0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C",
      "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const flip = await deploy("Flipper", {
    from: deployer,
    args: [
      "0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C",
      "0x1129068e407259f6b6F4baDb8DECb835953e8e13",
      "0x4554482d41000000000000000000000000000000000000000000000000000000",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem = await deploy("DSAuthority", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem2 = await deploy("DSAuthEvents", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem3 = await deploy("DSAuth", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem4 = await deploy("DSMath", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem5 = await deploy("DSNote", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem6 = await deploy("DSThing", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem7 = await deploy("DSStop", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem8 = await deploy("ERC20", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem9 = await deploy("DSTokenBase", {
    from: deployer,
    args: [
      "0x4d4b520000000000000000000000000000000000000000000000000000000000",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const gem10 = await deploy("DSToken", {
    from: deployer,
    args: [
      "0x4d4b520000000000000000000000000000000000000000000000000000000000",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const flop = await deploy("Flopper", {
    from: deployer,
    args: [
      "0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C",
      "0xdafE49Dbe2C36A72B30EdA50243651025074a385",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const join = await deploy("GemJoin", {
    from: deployer,
    args: [
      "0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C",
      "0x4241542d41000000000000000000000000000000000000000000000000000000",
      "0xdafE49Dbe2C36A72B30EdA50243651025074a385",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const join1 = await deploy("DaiJoin", {
    from: deployer,
    args: [
      "0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C",
      "0x74aa9127b617000bCFC131275b8fb3b37F910f0B",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const jug = await deploy("Jug", {
    from: deployer,
    args: ["0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C"],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const pot = await deploy("Pot", {
    from: deployer,
    args: ["0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C"],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  const vow = await deploy("Vow", {
    from: deployer,
    args: [
      "0x310DBaaB8ddE911C229821A997ff8B3b1D37aE1C",
      "0xe1aF37c49eD52fC240C8461D5809802c436b8fDA",
      "0x9ab02CEF2f24940D3dD444369F0EC33821D64830",
    ],
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });
};

module.exports.tags = ["all", "main"];
