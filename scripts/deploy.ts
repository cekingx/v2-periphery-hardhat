import { ethers } from "hardhat";

async function main() {

  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy('0x119D28dE1C046aE6D1Ccd019048C5Afd3b80659D', '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270');

  await router.deployed();

  console.log(`UniswapV2 router deployed to: ${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
