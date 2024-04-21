//Raffle
//Enter the lottery (paying some amount)
//Pick a random winner (verifiable random)
//winner to be selected every X minutes -> completly automated
//Chainlink oracle -> Randomeness , Automated execution (Chainlink keepers)

//SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

error Raffle__NotEnoughEntranceFee();

contract Raffle{
    uint private immutable i_entranceFee;

    address [] payable private s_players;

    event LotteryEnter(address indexed player)
    constructor(uint _entranceFee){
        i_entranceFee = _entranceFee;
    }
    function getEntranceFee() public view returns(uint){
        return i_entranceFee;
    }

    function enterLottery()payable public {
        if(msg.value < i_entranceFee){
            revert Raffle__NotEnoughEntranceFee();
        }
        s_players.push(payable(msg.sender)) //as address array is payable so we have to make the msg.sender payable before pushing it 
        emit LotteryEnter(msg.sender)
    }

    function randomWinner() private{}

    function getPlayer(uint indx) public view returns(address){
        return s_players[indx];
    }
}

//custom error are gas effecient instead of require
//use immutable if u are setting a value only once