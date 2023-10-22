const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        BalloonToken: {
          address: "0x95401dc811bb5740090279Ba06cfA8fcF6113778",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        BalloonVendor: {
          address: "0x998abeb3E57409262aE5b751f60747921B33613E",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_balloonToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_ageVerifier",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "buyer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOfETH",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOfTokens",
                  type: "uint256",
                },
              ],
              name: "BuyTokens",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "FreeLoader",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOfTokens",
                  type: "uint256",
                },
              ],
              name: "FreeToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "seller",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOfTokens",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOfETH",
                  type: "uint256",
                },
              ],
              name: "SellTokens",
              type: "event",
            },
            {
              inputs: [],
              name: "ageVerifier",
              outputs: [
                {
                  internalType: "contract UltraVerifier",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "balloonToken",
              outputs: [
                {
                  internalType: "contract BalloonToken",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "buyTokens",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_earliestBirthYear",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "_ageVerifier",
                  type: "address",
                },
              ],
              name: "changeAgeRestriction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "earliestBirthYear",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "proof",
                  type: "bytes",
                },
              ],
              name: "getFreeToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "sellTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "thirdPartyPublicKeyX",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "thirdPartyPublicKeyY",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "tokensPerEth",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        VerifierLessThanSignedAge: {
          address: "0xf5059a5D33d5853360D16C683c16e67980206f36",
          abi: [
            {
              inputs: [],
              name: "EC_SCALAR_MUL_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "MOD_EXP_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "PROOF_FAILURE",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "expected",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actual",
                  type: "uint256",
                },
              ],
              name: "PUBLIC_INPUT_COUNT_INVALID",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_GE_P",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
              type: "error",
            },
            {
              inputs: [],
              name: "getVerificationKeyHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_proof",
                  type: "bytes",
                },
                {
                  internalType: "bytes32[]",
                  name: "_publicInputs",
                  type: "bytes32[]",
                },
              ],
              name: "verify",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Verifiertest1: {
          address: "0x4826533B4897376654Bb4d4AD88B7faFD0C98528",
          abi: [
            {
              inputs: [],
              name: "EC_SCALAR_MUL_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "MOD_EXP_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "PROOF_FAILURE",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "expected",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actual",
                  type: "uint256",
                },
              ],
              name: "PUBLIC_INPUT_COUNT_INVALID",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_GE_P",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
              type: "error",
            },
            {
              inputs: [],
              name: "getVerificationKeyHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_proof",
                  type: "bytes",
                },
                {
                  internalType: "bytes32[]",
                  name: "_publicInputs",
                  type: "bytes32[]",
                },
              ],
              name: "verify",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Verifiertest2: {
          address: "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
          abi: [
            {
              inputs: [],
              name: "EC_SCALAR_MUL_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "MOD_EXP_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "PROOF_FAILURE",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "expected",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actual",
                  type: "uint256",
                },
              ],
              name: "PUBLIC_INPUT_COUNT_INVALID",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_GE_P",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
              type: "error",
            },
            {
              inputs: [],
              name: "getVerificationKeyHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_proof",
                  type: "bytes",
                },
                {
                  internalType: "bytes32[]",
                  name: "_publicInputs",
                  type: "bytes32[]",
                },
              ],
              name: "verify",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Verifiertestnum: {
          address: "0x0E801D84Fa97b50751Dbf25036d067dCf18858bF",
          abi: [
            {
              inputs: [],
              name: "EC_SCALAR_MUL_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "MOD_EXP_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "PROOF_FAILURE",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "expected",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actual",
                  type: "uint256",
                },
              ],
              name: "PUBLIC_INPUT_COUNT_INVALID",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_GE_P",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
              type: "error",
            },
            {
              inputs: [],
              name: "getVerificationKeyHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_proof",
                  type: "bytes",
                },
                {
                  internalType: "bytes32[]",
                  name: "_publicInputs",
                  type: "bytes32[]",
                },
              ],
              name: "verify",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Verifiertt: {
          address: "0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf",
          abi: [
            {
              inputs: [],
              name: "EC_SCALAR_MUL_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "MOD_EXP_FAILURE",
              type: "error",
            },
            {
              inputs: [],
              name: "PROOF_FAILURE",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "expected",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actual",
                  type: "uint256",
                },
              ],
              name: "PUBLIC_INPUT_COUNT_INVALID",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_GE_P",
              type: "error",
            },
            {
              inputs: [],
              name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
              type: "error",
            },
            {
              inputs: [],
              name: "getVerificationKeyHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_proof",
                  type: "bytes",
                },
                {
                  internalType: "bytes32[]",
                  name: "_publicInputs",
                  type: "bytes32[]",
                },
              ],
              name: "verify",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x851356ae760d987E095750cCeb3bC6014560891C",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
