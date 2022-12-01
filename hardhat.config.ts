import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@zerodevapp/mock-server";
import "@zerodevapp/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
