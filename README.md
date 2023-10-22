## Remix For Noir

Remix For Noir offers a user-friendly interface to write, test, and deploy Noir circuits and their Solidity Verifiers.
It is a Developer tool for the Noir Ecosystem that will speed up the process of writing and interacting with a Noir Code.
Remix For Noir will make it easier for developers to use and build on Aztec Chain.

# Running the project

1. cd `hardhat` and run `yarn && yarn chain` in terminal 1 to start the hardhat chain locally
2. Run `yarn deploy --reset` in terminal 2 to deploy the contracts
3. cd `nextjs` and run `yarn` in terminal 3
4. Run `yarn start` 3 to run the UI

# Prerequisites

- requires [nargo](https://noir-lang.org/dev/getting_started/nargo_installation) (tested with v0.10.1)
- requires [node] (https://nodejs.org/en) (tested with v18.8.0)
- requires [yarn] (https://yarnpkg.com/getting-started/install) (tested with 3.2.3)

### Core Features

- Write Code => Allows developers to write their Noir Code. It used Monaco Editor, the same library that is used to make Remix IDE.

- Compile and Deploy => Helps developers avoid the cumbersome process of creating a complete project to deploy a smart contract and it also takes care of the compilation process as well as making sure the users don't have to export private keys or write any scripts to deploy their smart contracts.

- Interact with Noir Functions => Interact with the read and write functions of your Noir Circuits with an intuitive UI that is created once you compile and deploy the Noir Code.

- Export Solidity Verifiers => The UI helps to export Solidity Verifiers and then those verifiers can be deployed on different chains.

- Everything stored on IPFS => The Noir code and their corresponding Solidity verifiers are stored on IPFS via Web3.Storage.

- Registry Contract => IPFS CIDs of the contracts are then stored in the Registry Contract Deployed on Aztec and Scroll Testnet, which is also used for fetching the data later on.

### Why REMIX FOR NOIR?

Interaction with contracts on Noir is difficult on its own and REMIX ON NOIR not only allows developers to interact with their smart contracts but also allows developers to deploy and verify their smart contracts with a very easy-to-use User interface.


## Sponsors Used

### Aztec

Remix For Noir is a Developer tool for the Noir Ecosystem that will speed up the process of writing and interacting with a Noir Code.

### Scroll

Scroll is a zero-knowledge rollup built to scale Ethereum.

Project contracts deployed on Scroll Sepolia and verified on the Scroll Etherscan.
Contract address - 0x8f02e04BA8eA83f99a460eEFa581eAe06c282Af4

### FVM

Web3.Storage is used to upload the Noir Circuits and the Solidity Verifiers.
These Solidity Verifiers can then be used in any EVM chain by retrieving the content from Web3.Storage.

## Images

Landing Page
![Screenshot 2023-10-22 at 8 42 59 PM](https://github.com/aviral10x/ethonline/assets/91749530/af6f3048-2f06-4be3-b843-6b94b373fe08)
Code Editor
![Screenshot 2023-10-22 at 8 44 11 PM](https://github.com/aviral10x/ethonline/assets/91749530/89c69b54-1741-4c4c-852b-7a8b8320b54e)
Interact with Noir Circuit - Read and Write Functions and Generate Prooof
![Screenshot 2023-10-22 at 8 45 17 PM](https://github.com/aviral10x/ethonline/assets/91749530/bf14617d-7553-44ca-b9d3-bf9efdd010c7)
Generate and Interact with Solidity Verifiers
![Screenshot 2023-10-22 at 8 44 34 PM](https://github.com/aviral10x/ethonline/assets/91749530/06c5f405-c12f-4433-bd73-739e4e4b5566)




## Developer

### Aviral Gupta

Twitter-https://twitter.com/aviral10x
