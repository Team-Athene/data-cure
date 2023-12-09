// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ERC165$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ERC165",
  "sourceName": "@openzeppelin/contracts/utils/introspection/ERC165.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ERC165",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ERC165$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/utils/introspection/ERC165.sol:ERC165",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ERC165$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ERC165",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ERC165$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/utils/introspection/ERC165.sol:ERC165",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ERC165$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ERC165",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ERC165$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/utils/introspection/ERC165.sol:ERC165",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ERC165$Type["abi"]>>;
}
