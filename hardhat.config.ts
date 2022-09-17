import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.17'
      },
      {
        version: '0.5.16'
      }
    ]
  }
};

export default config;
