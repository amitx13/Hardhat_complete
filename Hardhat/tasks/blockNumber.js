const { task } = require("hardhat/config");

task("block-number","Prints the current block-number").setAction(
    async(taskArgs,hre)=>{
        const blocknumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current block number:${blocknumber}`)
        
    }
)

module.exports = {}

//task are better for plugin and scripts are better for own local development