// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface DataCureAccess$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "DataCureAccess",
  "sourceName": "contracts/DataCureAccess.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IDataCure",
          "name": "_dataCureAddr",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_userToken",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "_cid",
          "type": "bytes32"
        }
      ],
      "name": "GrandAccess",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_dataCureAddr",
          "type": "address"
        }
      ],
      "name": "UpdateDataCureAddress",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_userToken",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "_cid",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "_listForSale",
          "type": "bool"
        }
      ],
      "name": "UploadData",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_dataCure",
      "outputs": [
        {
          "internalType": "contract IDataCure",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "accessListByCid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ownerToken",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "listForSale",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_userToken",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_cid",
          "type": "bytes32"
        }
      ],
      "name": "grandAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_dataCureAddr",
          "type": "address"
        }
      ],
      "name": "updateDataCureFactory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_userToken",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_cid",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "_listForSale",
          "type": "bool"
        }
      ],
      "name": "uploadData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_userToken",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_cid",
          "type": "bytes32"
        }
      ],
      "name": "verifyAccess",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b506040516200151f3803806200151f8339818101604052810190620000379190620000fc565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200012e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b6000620000c482620000a3565b9050919050565b620000d681620000b7565b8114620000e257600080fd5b50565b600081519050620000f681620000cb565b92915050565b6000602082840312156200011557620001146200007e565b5b60006200012584828501620000e5565b91505092915050565b6113e1806200013e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063064e74c91461006757806325a0a9db14610083578063428e9cc6146100b457806386240f81146100d2578063b65aa19c146100ee578063d4ef07791461011e575b600080fd5b610081600480360381019061007c9190610bbd565b61013a565b005b61009d60048036038101906100989190610bfd565b610351565b6040516100ab929190610c54565b60405180910390f35b6100bc610382565b6040516100c99190610cfc565b60405180910390f35b6100ec60048036038101906100e79190610d55565b6103a6565b005b61010860048036038101906101039190610bbd565b610420565b6040516101159190610d82565b60405180910390f35b61013860048036038101906101339190610dc9565b610632565b005b6001600381111561014e5761014d610e1c565b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777846040518263ffffffff1660e01b81526004016101a79190610e4b565b606060405180830381865afa1580156101c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e89190610faa565b6040015160038111156101fe576101fd610e1c565b5b1461023e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102359061105a565b60405180910390fd5b81600160008381526020019081526020016000206000015414610296576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028d906110c6565b60405180910390fd5b600160008281526020019081526020016000206001016102b4610b3a565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdf8ccca398426608c8a29f1440eab9776c8b5609a6a7fe76526d173f544c54ce82826040516103459291906110f5565b60405180910390a15050565b60016020528060005260406000206000915090508060000154908060020160009054906101000a900460ff16905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f88e5ee09a3a55f83d04e49bcb2c95bef29ec12bd1b1e6e237202d6b6851966f881604051610415919061112d565b60405180910390a150565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777856040518263ffffffff1660e01b815260040161047c9190610e4b565b606060405180830381865afa158015610499573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bd9190610faa565b6000015103610501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f89061105a565b60405180910390fd5b82600160008481526020019081526020016000206000015414610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611194565b60405180910390fd5b60005b600160008481526020019081526020016000206001018054905081101561062657610585610b3a565b73ffffffffffffffffffffffffffffffffffffffff166001600085815260200190815260200160002060010182815481106105c3576105c26111b4565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361061357600191505061062c565b808061061e90611212565b91505061055c565b50600090505b92915050565b6001600381111561064657610645610e1c565b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777856040518263ffffffff1660e01b815260040161069f9190610e4b565b606060405180830381865afa1580156106bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e09190610faa565b6040015160038111156106f6576106f5610e1c565b5b14806107c357506002600381111561071157610710610e1c565b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777856040518263ffffffff1660e01b815260040161076a9190610e4b565b606060405180830381865afa158015610787573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ab9190610faa565b6040015160038111156107c1576107c0610e1c565b5b145b610802576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f99061105a565b60405180910390fd5b6001600381111561081657610815610e1c565b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777856040518263ffffffff1660e01b815260040161086f9190610e4b565b606060405180830381865afa15801561088c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b09190610faa565b6040015160038111156108c6576108c5610e1c565b5b036109da576108d3610b3a565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016109429190610e4b565b602060405180830381865afa15801561095f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610983919061126f565b73ffffffffffffffffffffffffffffffffffffffff16146109d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d0906112e8565b60405180910390fd5b5b6000600160008481526020019081526020016000206000015414610a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a90611354565b60405180910390fd5b82600160008481526020019081526020016000206000018190555060016000838152602001908152602001600020600101610a6c610b3a565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806001600084815260200190815260200160002060020160006101000a81548160ff0219169083151502179055507f4c2e76e93dcb6754163d0dda21f4387a7d479fb8fcc6e522fd34d9ec5ed9eea2838383604051610b2d93929190611374565b60405180910390a1505050565b600033905090565b6000604051905090565b600080fd5b6000819050919050565b610b6481610b51565b8114610b6f57600080fd5b50565b600081359050610b8181610b5b565b92915050565b6000819050919050565b610b9a81610b87565b8114610ba557600080fd5b50565b600081359050610bb781610b91565b92915050565b60008060408385031215610bd457610bd3610b4c565b5b6000610be285828601610b72565b9250506020610bf385828601610ba8565b9150509250929050565b600060208284031215610c1357610c12610b4c565b5b6000610c2184828501610ba8565b91505092915050565b610c3381610b51565b82525050565b60008115159050919050565b610c4e81610c39565b82525050565b6000604082019050610c696000830185610c2a565b610c766020830184610c45565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610cc2610cbd610cb884610c7d565b610c9d565b610c7d565b9050919050565b6000610cd482610ca7565b9050919050565b6000610ce682610cc9565b9050919050565b610cf681610cdb565b82525050565b6000602082019050610d116000830184610ced565b92915050565b6000610d2282610c7d565b9050919050565b610d3281610d17565b8114610d3d57600080fd5b50565b600081359050610d4f81610d29565b92915050565b600060208284031215610d6b57610d6a610b4c565b5b6000610d7984828501610d40565b91505092915050565b6000602082019050610d976000830184610c45565b92915050565b610da681610c39565b8114610db157600080fd5b50565b600081359050610dc381610d9d565b92915050565b600080600060608486031215610de257610de1610b4c565b5b6000610df086828701610b72565b9350506020610e0186828701610ba8565b9250506040610e1286828701610db4565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000602082019050610e606000830184610c2a565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610eb482610e6b565b810181811067ffffffffffffffff82111715610ed357610ed2610e7c565b5b80604052505050565b6000610ee6610b42565b9050610ef28282610eab565b919050565b600081519050610f0681610b5b565b92915050565b600081519050610f1b81610b91565b92915050565b60048110610f2e57600080fd5b50565b600081519050610f4081610f21565b92915050565b600060608284031215610f5c57610f5b610e66565b5b610f666060610edc565b90506000610f7684828501610ef7565b6000830152506020610f8a84828501610f0c565b6020830152506040610f9e84828501610f31565b60408301525092915050565b600060608284031215610fc057610fbf610b4c565b5b6000610fce84828501610f46565b91505092915050565b600082825260208201905092915050565b7f4f6e6c7920612072656769737465726564206d656d626572206861732074686560008201527f2061636365737300000000000000000000000000000000000000000000000000602082015250565b6000611044602783610fd7565b915061104f82610fe8565b604082019050919050565b6000602082019050818103600083015261107381611037565b9050919050565b7f4f6e6c7420746865206f776e65722063616e206772616e742061636365737300600082015250565b60006110b0601f83610fd7565b91506110bb8261107a565b602082019050919050565b600060208201905081810360008301526110df816110a3565b9050919050565b6110ef81610b87565b82525050565b600060408201905061110a6000830185610c2a565b61111760208301846110e6565b9392505050565b61112781610d17565b82525050565b6000602082019050611142600083018461111e565b92915050565b7f4f6e6c7920746865206f776e65722063616e2076657269667920616363657373600082015250565b600061117e602083610fd7565b915061118982611148565b602082019050919050565b600060208201905081810360008301526111ad81611171565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061121d82610b51565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361124f5761124e6111e3565b5b600182019050919050565b60008151905061126981610d29565b92915050565b60006020828403121561128557611284610b4c565b5b60006112938482850161125a565b91505092915050565b7f4f6e6c7920746865206f776e65722063616e2075706c6f616420646174610000600082015250565b60006112d2601e83610fd7565b91506112dd8261129c565b602082019050919050565b60006020820190508181036000830152611301816112c5565b9050919050565b7f4461746120697320616c72656164792075706c6f616465640000000000000000600082015250565b600061133e601883610fd7565b915061134982611308565b602082019050919050565b6000602082019050818103600083015261136d81611331565b9050919050565b60006060820190506113896000830186610c2a565b61139660208301856110e6565b6113a36040830184610c45565b94935050505056fea264697066735822122059045bdf50b3511ca3326ca8326580eadacdd6833cb4a24640ea0bc94ac9eab764736f6c63430008140033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c8063064e74c91461006757806325a0a9db14610083578063428e9cc6146100b457806386240f81146100d2578063b65aa19c146100ee578063d4ef07791461011e575b600080fd5b610081600480360381019061007c9190610bbd565b61013a565b005b61009d60048036038101906100989190610bfd565b610351565b6040516100ab929190610c54565b60405180910390f35b6100bc610382565b6040516100c99190610cfc565b60405180910390f35b6100ec60048036038101906100e79190610d55565b6103a6565b005b61010860048036038101906101039190610bbd565b610420565b6040516101159190610d82565b60405180910390f35b61013860048036038101906101339190610dc9565b610632565b005b6001600381111561014e5761014d610e1c565b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777846040518263ffffffff1660e01b81526004016101a79190610e4b565b606060405180830381865afa1580156101c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e89190610faa565b6040015160038111156101fe576101fd610e1c565b5b1461023e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102359061105a565b60405180910390fd5b81600160008381526020019081526020016000206000015414610296576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028d906110c6565b60405180910390fd5b600160008281526020019081526020016000206001016102b4610b3a565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdf8ccca398426608c8a29f1440eab9776c8b5609a6a7fe76526d173f544c54ce82826040516103459291906110f5565b60405180910390a15050565b60016020528060005260406000206000915090508060000154908060020160009054906101000a900460ff16905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f88e5ee09a3a55f83d04e49bcb2c95bef29ec12bd1b1e6e237202d6b6851966f881604051610415919061112d565b60405180910390a150565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777856040518263ffffffff1660e01b815260040161047c9190610e4b565b606060405180830381865afa158015610499573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bd9190610faa565b6000015103610501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f89061105a565b60405180910390fd5b82600160008481526020019081526020016000206000015414610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611194565b60405180910390fd5b60005b600160008481526020019081526020016000206001018054905081101561062657610585610b3a565b73ffffffffffffffffffffffffffffffffffffffff166001600085815260200190815260200160002060010182815481106105c3576105c26111b4565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361061357600191505061062c565b808061061e90611212565b91505061055c565b50600090505b92915050565b6001600381111561064657610645610e1c565b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777856040518263ffffffff1660e01b815260040161069f9190610e4b565b606060405180830381865afa1580156106bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e09190610faa565b6040015160038111156106f6576106f5610e1c565b5b14806107c357506002600381111561071157610710610e1c565b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777856040518263ffffffff1660e01b815260040161076a9190610e4b565b606060405180830381865afa158015610787573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ab9190610faa565b6040015160038111156107c1576107c0610e1c565b5b145b610802576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f99061105a565b60405180910390fd5b6001600381111561081657610815610e1c565b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385af4777856040518263ffffffff1660e01b815260040161086f9190610e4b565b606060405180830381865afa15801561088c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b09190610faa565b6040015160038111156108c6576108c5610e1c565b5b036109da576108d3610b3a565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016109429190610e4b565b602060405180830381865afa15801561095f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610983919061126f565b73ffffffffffffffffffffffffffffffffffffffff16146109d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d0906112e8565b60405180910390fd5b5b6000600160008481526020019081526020016000206000015414610a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a90611354565b60405180910390fd5b82600160008481526020019081526020016000206000018190555060016000838152602001908152602001600020600101610a6c610b3a565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806001600084815260200190815260200160002060020160006101000a81548160ff0219169083151502179055507f4c2e76e93dcb6754163d0dda21f4387a7d479fb8fcc6e522fd34d9ec5ed9eea2838383604051610b2d93929190611374565b60405180910390a1505050565b600033905090565b6000604051905090565b600080fd5b6000819050919050565b610b6481610b51565b8114610b6f57600080fd5b50565b600081359050610b8181610b5b565b92915050565b6000819050919050565b610b9a81610b87565b8114610ba557600080fd5b50565b600081359050610bb781610b91565b92915050565b60008060408385031215610bd457610bd3610b4c565b5b6000610be285828601610b72565b9250506020610bf385828601610ba8565b9150509250929050565b600060208284031215610c1357610c12610b4c565b5b6000610c2184828501610ba8565b91505092915050565b610c3381610b51565b82525050565b60008115159050919050565b610c4e81610c39565b82525050565b6000604082019050610c696000830185610c2a565b610c766020830184610c45565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610cc2610cbd610cb884610c7d565b610c9d565b610c7d565b9050919050565b6000610cd482610ca7565b9050919050565b6000610ce682610cc9565b9050919050565b610cf681610cdb565b82525050565b6000602082019050610d116000830184610ced565b92915050565b6000610d2282610c7d565b9050919050565b610d3281610d17565b8114610d3d57600080fd5b50565b600081359050610d4f81610d29565b92915050565b600060208284031215610d6b57610d6a610b4c565b5b6000610d7984828501610d40565b91505092915050565b6000602082019050610d976000830184610c45565b92915050565b610da681610c39565b8114610db157600080fd5b50565b600081359050610dc381610d9d565b92915050565b600080600060608486031215610de257610de1610b4c565b5b6000610df086828701610b72565b9350506020610e0186828701610ba8565b9250506040610e1286828701610db4565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000602082019050610e606000830184610c2a565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610eb482610e6b565b810181811067ffffffffffffffff82111715610ed357610ed2610e7c565b5b80604052505050565b6000610ee6610b42565b9050610ef28282610eab565b919050565b600081519050610f0681610b5b565b92915050565b600081519050610f1b81610b91565b92915050565b60048110610f2e57600080fd5b50565b600081519050610f4081610f21565b92915050565b600060608284031215610f5c57610f5b610e66565b5b610f666060610edc565b90506000610f7684828501610ef7565b6000830152506020610f8a84828501610f0c565b6020830152506040610f9e84828501610f31565b60408301525092915050565b600060608284031215610fc057610fbf610b4c565b5b6000610fce84828501610f46565b91505092915050565b600082825260208201905092915050565b7f4f6e6c7920612072656769737465726564206d656d626572206861732074686560008201527f2061636365737300000000000000000000000000000000000000000000000000602082015250565b6000611044602783610fd7565b915061104f82610fe8565b604082019050919050565b6000602082019050818103600083015261107381611037565b9050919050565b7f4f6e6c7420746865206f776e65722063616e206772616e742061636365737300600082015250565b60006110b0601f83610fd7565b91506110bb8261107a565b602082019050919050565b600060208201905081810360008301526110df816110a3565b9050919050565b6110ef81610b87565b82525050565b600060408201905061110a6000830185610c2a565b61111760208301846110e6565b9392505050565b61112781610d17565b82525050565b6000602082019050611142600083018461111e565b92915050565b7f4f6e6c7920746865206f776e65722063616e2076657269667920616363657373600082015250565b600061117e602083610fd7565b915061118982611148565b602082019050919050565b600060208201905081810360008301526111ad81611171565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061121d82610b51565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361124f5761124e6111e3565b5b600182019050919050565b60008151905061126981610d29565b92915050565b60006020828403121561128557611284610b4c565b5b60006112938482850161125a565b91505092915050565b7f4f6e6c7920746865206f776e65722063616e2075706c6f616420646174610000600082015250565b60006112d2601e83610fd7565b91506112dd8261129c565b602082019050919050565b60006020820190508181036000830152611301816112c5565b9050919050565b7f4461746120697320616c72656164792075706c6f616465640000000000000000600082015250565b600061133e601883610fd7565b915061134982611308565b602082019050919050565b6000602082019050818103600083015261136d81611331565b9050919050565b60006060820190506113896000830186610c2a565b61139660208301856110e6565b6113a36040830184610c45565b94935050505056fea264697066735822122059045bdf50b3511ca3326ca8326580eadacdd6833cb4a24640ea0bc94ac9eab764736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "DataCureAccess",
    constructorArgs: [_dataCureAddr: AbiParameterToPrimitiveType<{"name":"_dataCureAddr","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<DataCureAccess$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/DataCureAccess.sol:DataCureAccess",
    constructorArgs: [_dataCureAddr: AbiParameterToPrimitiveType<{"name":"_dataCureAddr","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<DataCureAccess$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "DataCureAccess",
    constructorArgs: [_dataCureAddr: AbiParameterToPrimitiveType<{"name":"_dataCureAddr","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<DataCureAccess$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/DataCureAccess.sol:DataCureAccess",
    constructorArgs: [_dataCureAddr: AbiParameterToPrimitiveType<{"name":"_dataCureAddr","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<DataCureAccess$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "DataCureAccess",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<DataCureAccess$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/DataCureAccess.sol:DataCureAccess",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<DataCureAccess$Type["abi"]>>;
}
