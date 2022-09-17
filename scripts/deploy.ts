import { ethers } from "hardhat";

async function main() {

  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy('0x119D28dE1C046aE6D1Ccd019048C5Afd3b80659D', '0xc778417E063141139Fce010982780140Aa0cD5Ab');

  await router.deployed();

  console.log(`UniswapV2 router deployed to: ${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
