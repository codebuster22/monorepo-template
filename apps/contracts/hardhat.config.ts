/** @type import('hardhat/config').HardhatUserConfig */
import { HardhatUserConfig } from 'hardhat/config';
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "build/artifacts",
    cache: "build/cache",
    deploy: "deploy",
    sources: "src",
  },
  solidity: "0.8.18",
};

export default config;
