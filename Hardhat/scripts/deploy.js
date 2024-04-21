const {ethers , run , network}= require("hardhat");
require("dotenv").config() //to enable polling from the env file

async function main(){

  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage") //abi , bytecode here hardhat knows that artifacts folder already have the contract abi and bytecode so we only need to apecify the contract name 

  console.log("Deploying...");
  const deployedContract = await SimpleStorageFactory.deploy();
  //console.log("1");
  //console.log("deployedContract",deployedContract)
  //onsole.log(deployedContract.target)

  //console.log(network.config.chainId)
  if(network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY){
    //console.log("here1")
    const deployTx = deployedContract.deploymentTransaction();
    //console.log(deployTx);
    await deployTx.wait(3);
    //console.log("here2")
      await verify(deployedContract.target,[])
    }

    // console.log("2");
    await deployedContract.store(42);
    // console.log("3");
    // Call the 'retrive' function to retrieve the stored value of 'favnumber'
    const storedValue = await deployedContract.retrive();
    // console.log("4");
    console.log("Retrieved value of 'favnumber':", storedValue);
}

async function verify(contractAddress , args){
  console.log("verifying...")
  try{
    await run("verify:verify",{
    address:contractAddress,
    constructorArguments:args,
  })
  }
  catch(e){
    if(e.message.toLowerCase().includes("already verified")){
      console.log("already verified")
    }else{
      console.log(e)
    }
  }
  
}

main().then(()=>{process.exit(0)}).catch((e)=>{console.log(e);process.exit(1)})


//whenever we and a new plugin in the hardat.config.js Hardhat add that plugin in the task section and to run that task we need to import run from hardhat 