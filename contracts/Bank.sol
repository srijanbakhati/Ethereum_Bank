// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "hardhat/console.sol";

contract Bank{
    address public  Owner;
    struct Data{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Data[] public data;
    mapping(address=>uint) public contributions;
    uint public raisedAmount;
    constructor(){
        Owner=msg.sender;
    }
    event Deposit(address indexed _from,uint _time,uint _amount);

    function deposit(string calldata _name,string calldata _message)public payable{
        require(msg.sender!=address(0),"Invalid Address");
        require(msg.value>=1,"The amount to deposit should be atleast 1");
        data.push(Data(_name,_message,block.timestamp,msg.sender));
        contributions[msg.sender]+=msg.value;
        raisedAmount+=msg.value;
        emit Deposit(msg.sender, block.timestamp,msg.value);
    }


    function getData()public view returns(Data[] memory){
        return data;
    }
    
}
