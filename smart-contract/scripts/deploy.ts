import hre from "hardhat";
import { run } from "hardhat";

async function main() {

  const verifier = await hre.viem.deployContract("Verifier");
  console.log(
    `Verifier deployed to ${verifier.address}`
  );

  const dataCureArgs = [verifier.address]
  const dataCure = await hre.viem.deployContract("DataCure", dataCureArgs);
  console.log(
    `DataCure deployed to ${dataCure.address}`
  );

  const dataCureAccessArgs = [dataCure.address]
  const dataCureAccess = await hre.viem.deployContract("DataCureAccess", dataCureAccessArgs);
  console.log(
    `DataCureAccess deployed to ${dataCureAccess.address}`
  );

  console.log("🚀 All contracts have been deployed");

    //Verify Verifier contract
    await run("verify:verify", {
      address: verifier.address,
      constructorArguments: [],
    });
    console.log("Verifier verified");


    //Verify DataCure contract
    await run("verify:verify", {
      address: dataCure.address,
      constructorArguments: dataCureArgs,
    });
    console.log("DataCure verified");

    //Verify DataCureAccess contract
    await run("verify:verify", {
      address: dataCureAccess.address,
      constructorArguments: dataCureAccessArgs,
    });
    console.log("DataCureAccess verified");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
