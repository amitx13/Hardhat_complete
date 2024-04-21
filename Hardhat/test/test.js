const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("Simple-Storage", () => {
    let SimpleStorageFactory, SimpleStorage;
    //always execute before each it 
    beforeEach(async () => {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        SimpleStorage = await SimpleStorageFactory.deploy()
    })

    it("It should starts with a favnumber : 0", async () => {
        const currentValue = await SimpleStorage.retrive()
        const expectedValue = "0";
        //assert - fact
        //expect
        assert.equal(currentValue.toString(), expectedValue)
    })//what and how

    it("Update the favnumber when we call the store : 7", async () => {
        const expectedValue = "7";
        const TnxResponce = await SimpleStorage.store(expectedValue);
        await TnxResponce.wait(1);
        const currentValue = await SimpleStorage.retrive()
        assert.equal(currentValue.toString(), expectedValue)
    })
})