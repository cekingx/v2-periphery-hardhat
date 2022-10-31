import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan"

const {alchemyApiKey, privateKey, etherscanKey, polygonAlchemyApiKey, polygonscanKey} = require('./secrets.json');

const config: HardhatUserConfig = {
  networks: {
    testnet: {
      url: `https://eth-goerli.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: [privateKey]
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${polygonAlchemyApiKey}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.5.16'
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 50,
          },
        },
      },
    ]
  },
  etherscan: {
    apiKey: {
      goerli: etherscanKey,
      polygonMumbai: polygonscanKey
    }
  }
};

export default config;
