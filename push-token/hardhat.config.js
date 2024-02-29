require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  
  networks: {
    // goerli: {
    //   url: process.env.INFURA_GOERLI_ENDPOINT,
    //   accounts: [process.env.PRIVATE_KEY]
    // },
    sepolia: {
        url: process.env.INFURA_SEPOLIA_ENDPOINT,
        accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
