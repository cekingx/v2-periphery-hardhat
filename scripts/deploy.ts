import { ethers } from "hardhat";

async function main() {

  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy('0x5eB642091f2eC15e2F8686a9b353BD9b49bFB8B2', '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889');

  await router.deployed();

  console.log(`UniswapV2 router deployed to: ${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
