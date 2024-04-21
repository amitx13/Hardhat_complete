require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config() //to enable polling from the env file
require("@nomicfoundation/hardhat-verify");
require("./tasks/blockNumber")
require("hardhat-gas-reporter")

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const LOCALHOST_URL = process.env.LOCALHOST_URL;
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: LOCALHOST_URL,
      chainId: 31337,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-reporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COIN_MARKET_CAP_API_KEY
  }
};
