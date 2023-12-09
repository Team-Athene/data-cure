// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Math$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Math",
  "sourceName": "@openzeppelin/contracts/utils/math/Math.sol",
  "abi": [
    {
      "inputs": [],
      "name": "MathOverflowedMulDiv",
      "type": "error"
    }
  ],
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220790d7b91fdd446ac2c697f171eeef084d56599665c6d788fe80fcce7f6a12f8764736f6c63430008140033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220790d7b91fdd446ac2c697f171eeef084d56599665c6d788fe80fcce7f6a12f8764736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Math",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Math$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/utils/math/Math.sol:Math",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Math$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Math",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Math$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/utils/math/Math.sol:Math",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Math$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Math",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Math$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/utils/math/Math.sol:Math",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Math$Type["abi"]>>;
}
