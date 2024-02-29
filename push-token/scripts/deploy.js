const hre = require("hardhat");

async function main() {
  const PUSHToken = await hre.ethers.getContractFactory("PUSHToken");
  
  // Provide correct constructor argument for cap
  const pushToken = await PUSHToken.deploy(100000000);

  await pushToken.deployed();

  console.log("PUSHToken deployed at address:", pushToken.address);
}

main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exit(1);
});
