import { ethers } from "hardhat";

async function main() {

  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy('0x119D28dE1C046aE6D1Ccd019048C5Afd3b80659D', '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa');

  await router.deployed();

  console.log(`UniswapV2 router deployed to: ${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
