// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SimpleStorage{
    uint public favnumber;

    struct People{
        uint256 number;
        string name;
    }

    People [] public people;

    mapping(string => uint256) public nameTonum;

    function addPerson(string memory _name , uint256 _number) public {
          people.push(People(_number , _name));
          nameTonum[_name] = _number;
    }

    function store(uint256 _favnumber) public {
        favnumber = _favnumber;
    }

    function retrive() view public returns (uint256){
        return favnumber;
    }

    
}
