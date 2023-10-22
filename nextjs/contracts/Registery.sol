//SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;


contract Registery {
    address public manager;

    mapping(address => string) public contractRecord;

    modifier onlyManager() {
        require(msg.sender == manager, "Only Manager Authorised");
        _;
    }

    constructor(address _manager) {
       _manager= msg.sender;
    }

    function setManager(address _newManager) public {
        manager = _newManager;
    }

    /// add New contract record
    function addContractRecord(address _contractAddress, string memory _ipfsURI)
        public
        onlyManager
    {
        // require(_contractAddress != address(0), "Not a Valid contract Address");

        contractRecord[_contractAddress] = _ipfsURI;
    }

    /// get Contract record
    function getContractRecord(address _contractAddress)
        public
        view
        returns (string memory _ipfsURI)
    {
        _ipfsURI = contractRecord[_contractAddress];
    }
}
