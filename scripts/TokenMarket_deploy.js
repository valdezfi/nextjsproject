async function main() {
    const TokenMarket = await ethers.getContractFactory("TokenMarket");
    const tokenMarket = await TokenMarket.deploy("Token Market");
  
    console.log("My Contract deployed to:", TokenMarket.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
  });