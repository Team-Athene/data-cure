import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function main() {

  const verifier = await hre.viem.deployContract("Verifier");
  const dataCure = await hre.viem.deployContract("DataCure", [verifier.address]);
  console.log(
    `Verifier deployed to ${verifier.address}`
  );

  console.log(
    `DataCure deployed to ${dataCure.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
