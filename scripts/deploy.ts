import { ethers } from "hardhat";

async function main() {

  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy('0x45118cC756e212f1C35D68b61dd779303a92Fbaa', '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889');

  await router.deployed();

  console.log(`UniswapV2 router deployed to: ${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
