const { expect } = require("chai");

describe("TokenMarket", () => {
  it("should return its name", async () => {
    const TokenMarket = await ethers.getContractFactory("TokenMarket");
    const tokenMarket = await TokenMarket.deploy("Token Market");

    await tokenMarket.deployed();
    expect(await tokenMarket.getName()).to.equal("Token Market");
  });
  it("should change its name when requested", async () => {
    const TokenMarket = await ethers.getContractFactory("TokenMarket");
    const tokenMarket = await TokenMarket.deploy("Token Market");

    await myContract.changeName("Another Contract");
    expect(await tokenMarket.getName()).to.equal("Another Contract");
  });
});
