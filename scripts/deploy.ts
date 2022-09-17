import { ethers } from "hardhat";

async function main() {

  const Factory = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy('0x1C3D9D9d233605aa4A6a63365ceF35169497c62d');

  await factory.deployed();

  console.log(`UniswapV2 factory deployed to: ${factory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
