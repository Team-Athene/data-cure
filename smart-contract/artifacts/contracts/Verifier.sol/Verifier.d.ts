// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Verifier$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Verifier",
  "sourceName": "contracts/Verifier.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "_pA",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "_pB",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "_pC",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[34]",
          "name": "_pubSignals",
          "type": "uint256[34]"
        }
      ],
      "name": "verifyProof",
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
  "bytecode": "0x608060405234801561001057600080fd5b5061123f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638525a61d14610030575b600080fd5b61004a6004803603810190610045919061116a565b610060565b60405161005791906111ee565b60405180910390f35b6000610ef6565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478110610098576000805260206000f35b50565b600060405183815284602082015285604082015260408160608360076107d05a03fa9150816100ce576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa9150816100fe576000805260206000f35b505050505050565b600060808601600087017f0cbcf12da1be9787f46cab65140287e67ef9cfd0275e6b3becc41a52728028f081527f021315f7d802b02b2e0036c3547c95fe69602634247edc3d701c783cea64157260208201526101a960008801357f2ab2f82a2bb19a2d256730a3ed172c4289b0ec01c0942bbdb7a5e7ece6dbfb257f13a67a7c4b8264be108aded50091a12e70003ad31663d5f773275660ff5ad0978461009b565b6101f960208801357f1fa2abd3ae7a610932bb92914292be79fcc66c8b06fb2ef4dbb97146415a0c1d7f128ab70fb20604f6dd696ee65a1710cee0ff887e1494242b55c74799fb44bfcb8461009b565b61024960408801357f2cbf7596c2235dce95d430b11f2503e0208505790f87f2585544282c6e396a077f0f0f142ff0f0ce706c148d710fb45a9d24a0f3bc1c02d4cbdef3fbe83cfc8b4a8461009b565b61029960608801357f1d6855ab00a7b22338c0abb9f639ffc6818ada14542c15eb81722afe6fd43bc57f08b309aa34cd399e1ea46f99196b07582b64c9f99dfe2904c0d300229aa48ed28461009b565b6102e860808801357f135d38b4743a17ce55a8cd2c5b94c99193909a59d937809c8e7ebf575762721a7e23923e7ed54857a6e50d10d1cad2e724e9264799bc8f8492828e74527a70138461009b565b61033860a08801357f145991e5ff27c73fa0c66a55a3bea358dc93c5bced4dd45362ded914b4e7d4f67f0a49ca95b71d32b811bc7722f7b112ef97a4b38b083a02ac617be62c8a502c2a8461009b565b61038860c08801357f145e0a1cf3455ab359ac9477a32227a8850f4659716bdc65d3b39f80408b23777f26554998e183c8f514c80d50c09e6e59c77a6ee8d43ceb33ca2440aabd29440c8461009b565b6103d860e08801357f2151e20fbefe7570597616a50d40710563965a9a974a2869f09e74dffc0998d27f1efc166ecd55bcae6091e4c1f78859aebbbdfaef21b2bdd039878437a45a36f78461009b565b6104296101008801357f0710ab81b9e92e264fbed961c377e42c9135a2bfb842adf7052c41e4b923cf387f06da1c7a0aef225cd285484e957c17eab960fa9b1de2fed9f3eda251fe1a60bd8461009b565b61047a6101208801357f0923243963523cb09a768d59ab7001cece6cf6ad112cd1797752aa00b455b5107f1871a639647462b5ae57ffb8a24876e6f4d0fc130003e4710e3b63de8c6af7598461009b565b6104cb6101408801357f29a1f84d1bd371806d2b54fd9028ab481d4faff565c20b7b008f356f522662e07f0645a5ecf50638f17e676f556031fc11d691393636db91605893b32c1e7c3f628461009b565b61051c6101608801357f1539f25c36296e082069ae50a8ac9857ee87f4917bd504a103cb06f3356557687f032013875dc97564c56450499b7bafcfd01540196c8639a85702f2a51360b8c88461009b565b61056d6101808801357f2146087bbc26c535e19597ce205a39fac2ce19590eb2961fd3ac0c462855f3c37f25c657d860736fdee5b0a4173b44e4fcdecdffce9422f714e39e9db32927d1868461009b565b6105be6101a08801357f07cefc6ac5eaf6b85fd3896916b0dbbb9f1f7c7c0fd791a34698c132bf685abb7f0eff9983dcfcd42b73568cecb9830d03f25545cce921ef1b272ccedce2c435a28461009b565b61060f6101c08801357f2af62f27556ad6dd11c1c7ddd6551415425d9e7028d0f92ff9f3e59717b49df67f221bc6c9b25e6b8b33a9afa4ec94a5de51d5bc865aca7b0364938063b01b649e8461009b565b6106606101e08801357f046a14665e35d7675e06c77621e91935193ec8c2c63ab1f1c8168b7049c9dbfe7f0370398f5a589e7fdd00b564ca5c884bfad324c505812104514f2bcc11b182258461009b565b6106b16102008801357f09dc720f2b27c17fd53463f4c5884ac979e96395a81ec39a5159c118876011a87f01b0eed164f002ba3bfb32ca160e837223ea271f4ddfd3c974e0d7bf4e22357a8461009b565b6107026102208801357f211500fc7121aab601a38a0acfa76c575b7956d6dcfabb1f7995c967861b730b7f09e02ff83f9835895681f1d31ee3ffba73cd8eaf63c30609014953119712f32b8461009b565b6107536102408801357f2376257d004223af0e6489d25e64166da9fffb80b3cb635a88407122d7d910f67f1877df48e29c674c8352ac5c6350547bdf796d74cd28f83c1df9505e71371ff18461009b565b6107a46102608801357f279072ed3ae698f4fe0d1549753c89984edea5bdef973225a788d9f6d7a60c407f2eadc375d9b59ce74fa3fbbe813e8acad39e0fe067fa87251e0022701f0faa368461009b565b6107f56102808801357f053e0195aa3cf4d350c69012964a8b197a5f5f6d9978d29cbcf719cc7b44c0377f2d14de4d604f21529b321dac551d5d830e450a30980f0523e1a9b2a1ca2111048461009b565b6108466102a08801357f16e184fa4b95ea348a9bc199697704513bc37ebab6757c82dfaab33b3e9b6be17f0141a51cf075185b098f6d0a3bc54f1c1cd7f9804919623b0e653cc2ca4c5d828461009b565b6108976102c08801357f1a7c9e749c267485f1fbe7472d942e525093a8e340fc716204689c989aa5bb907f0bc8fb550855dac40e96adfeba50fddae6df672e04f173af5dd7aaa1feae0cdb8461009b565b6108e86102e08801357f2fe270d51f667c9c2cb2eeccdc486952545015b7db092ee7fd2610add80d11597f26992dcab5c11075e3c272428c07aef6095ce2e515fc09c8dd197fdc1e5cc2af8461009b565b6109396103008801357f02b9678f1d1f83326586bdf8c3a712d99c61e5ca9b0e1615bbe2e39a93936c9f7f110b5b0f8cc6af959d94a98d251803717fb4738114a23681903d5397ac67a6178461009b565b61098a6103208801357f0713ef679076a73b212295e52474264b52ebe5d8a15492a4eaa0764c37aec1f97f1522d4614a008f6ac9edaff99da745eaafe9e7134fa300dc4bd387e2fc9982778461009b565b6109db6103408801357f0d410462cecfeda5bbcf25f5443db7348211ac571bc172e25a0f6a3bd9fff2327f093231d1491f79adc648cfe560a5f694ede1298f99edf8519ccfeaa46882149a8461009b565b610a2c6103608801357f1d921932b532a9cd80b9f6ca27602bb1c5a76be5256228ee29882a9c37b5c7137f13a33650ab5ef25d7f48a1e353cfe078288e17e87d0e6553bede4016a13bd6c88461009b565b610a7d6103808801357f1306012c596928b5f336b7df9b30f987e22365754b8822a49e1e4658a108dbfc7f052740dcbbaba4e97a2bb22a883de694170c853e12a5ff88a6a89c15cfc0c6768461009b565b610ace6103a08801357f054c40dea3c7a1038a0e04b38b55c1f0eb9f3fa11678ab818c3ee197c6133af37f2755e44715a61e69f371f03f27ce9b1d24347650e3e182788241e2434ca84a5b8461009b565b610b1f6103c08801357f2069b2f1c70c7bdb78a7d50cc8b04a48af4634bcacab8041ae15dc561b8a03797f1c13bf05fd1f42e03a35f699e8c620448b183be227f0d5af897796b6261c7b258461009b565b610b706103e08801357f208fc9880aa2d2ee157803f65c5281ac1a60a0d25bd99bb0a734f92ee64be7e87f0591dd47d001f2af65ce0650aa7c947239c751d73eaa6516ab49562804fff88e8461009b565b610bc16104008801357f11d9f2e283049f7422ef1924d574de3f71e24fb3fc5fde612ed9f1e43ab0bf147f20413e47b2373cf26c99dd47d3d6bcd8f6c2d43553bf2ae6b0260e5ff9d42cf98461009b565b610c126104208801357f2990a1a7c720b03282f52d6dec9206be516df7d05e11ce9292556dd5969bc0537f129a77fcb078b26969d29ea3128f4cd8eda648f3eea42f8805dd593b1ee70f8f8461009b565b833582527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4760208501357f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4703066020830152843560408301526020850135606083015260408501356080830152606085013560a08301527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e260c08301527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d192660e08301527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c6101008301527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab6101208301527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a76101408301527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8610160830152600088015161018083015260206000018801516101a08301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101c08301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101e08301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102008301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa610220830152853561024083015260208601356102608301527f0b58532df5ac163ae9f2cb118991860b10db0c15c2871336106816795cbf295d6102808301527f14053833d28897afd8b3da1a7d448e85be7fc52bcc6b10c8edb623bff09fd9c46102a08301527f19afcdb23b984735eff63fadc76d03629d9be6ff2e8a371c74a1e6564d2010f06102c08301527f2b8a715912638ad2404f49106b5266d4a0c5d5e8a88aaf75da9c18bd67943c2c6102e08301526020826103008460086107d05a03fa82518116935050505095945050505050565b6040516103808101604052610f0e6000840135610067565b610f1b6020840135610067565b610f286040840135610067565b610f356060840135610067565b610f426080840135610067565b610f4f60a0840135610067565b610f5c60c0840135610067565b610f6960e0840135610067565b610f77610100840135610067565b610f85610120840135610067565b610f93610140840135610067565b610fa1610160840135610067565b610faf610180840135610067565b610fbd6101a0840135610067565b610fcb6101c0840135610067565b610fd96101e0840135610067565b610fe7610200840135610067565b610ff5610220840135610067565b611003610240840135610067565b611011610260840135610067565b61101f610280840135610067565b61102d6102a0840135610067565b61103b6102c0840135610067565b6110496102e0840135610067565b611057610300840135610067565b611065610320840135610067565b611073610340840135610067565b611081610360840135610067565b61108f610380840135610067565b61109d6103a0840135610067565b6110ab6103c0840135610067565b6110b96103e0840135610067565b6110c7610400840135610067565b6110d5610420840135610067565b6110e3610440840135610067565b6110f0818486888a610106565b8060005260206000f35b600080fd5b600080fd5b6000819050826020600202820111156111205761111f6110ff565b5b92915050565b600081905082604060020282011115611142576111416110ff565b5b92915050565b600081905082602060220282011115611164576111636110ff565b5b92915050565b6000806000806105408587031215611185576111846110fa565b5b600061119387828801611104565b94505060406111a487828801611126565b93505060c06111b587828801611104565b9250506101006111c787828801611148565b91505092959194509250565b60008115159050919050565b6111e8816111d3565b82525050565b600060208201905061120360008301846111df565b9291505056fea2646970667358221220e73f79380b09c2c7d98323dcac60882d54cf932a9097d48f5bdad6b53ac3e69364736f6c63430008140033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80638525a61d14610030575b600080fd5b61004a6004803603810190610045919061116a565b610060565b60405161005791906111ee565b60405180910390f35b6000610ef6565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478110610098576000805260206000f35b50565b600060405183815284602082015285604082015260408160608360076107d05a03fa9150816100ce576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa9150816100fe576000805260206000f35b505050505050565b600060808601600087017f0cbcf12da1be9787f46cab65140287e67ef9cfd0275e6b3becc41a52728028f081527f021315f7d802b02b2e0036c3547c95fe69602634247edc3d701c783cea64157260208201526101a960008801357f2ab2f82a2bb19a2d256730a3ed172c4289b0ec01c0942bbdb7a5e7ece6dbfb257f13a67a7c4b8264be108aded50091a12e70003ad31663d5f773275660ff5ad0978461009b565b6101f960208801357f1fa2abd3ae7a610932bb92914292be79fcc66c8b06fb2ef4dbb97146415a0c1d7f128ab70fb20604f6dd696ee65a1710cee0ff887e1494242b55c74799fb44bfcb8461009b565b61024960408801357f2cbf7596c2235dce95d430b11f2503e0208505790f87f2585544282c6e396a077f0f0f142ff0f0ce706c148d710fb45a9d24a0f3bc1c02d4cbdef3fbe83cfc8b4a8461009b565b61029960608801357f1d6855ab00a7b22338c0abb9f639ffc6818ada14542c15eb81722afe6fd43bc57f08b309aa34cd399e1ea46f99196b07582b64c9f99dfe2904c0d300229aa48ed28461009b565b6102e860808801357f135d38b4743a17ce55a8cd2c5b94c99193909a59d937809c8e7ebf575762721a7e23923e7ed54857a6e50d10d1cad2e724e9264799bc8f8492828e74527a70138461009b565b61033860a08801357f145991e5ff27c73fa0c66a55a3bea358dc93c5bced4dd45362ded914b4e7d4f67f0a49ca95b71d32b811bc7722f7b112ef97a4b38b083a02ac617be62c8a502c2a8461009b565b61038860c08801357f145e0a1cf3455ab359ac9477a32227a8850f4659716bdc65d3b39f80408b23777f26554998e183c8f514c80d50c09e6e59c77a6ee8d43ceb33ca2440aabd29440c8461009b565b6103d860e08801357f2151e20fbefe7570597616a50d40710563965a9a974a2869f09e74dffc0998d27f1efc166ecd55bcae6091e4c1f78859aebbbdfaef21b2bdd039878437a45a36f78461009b565b6104296101008801357f0710ab81b9e92e264fbed961c377e42c9135a2bfb842adf7052c41e4b923cf387f06da1c7a0aef225cd285484e957c17eab960fa9b1de2fed9f3eda251fe1a60bd8461009b565b61047a6101208801357f0923243963523cb09a768d59ab7001cece6cf6ad112cd1797752aa00b455b5107f1871a639647462b5ae57ffb8a24876e6f4d0fc130003e4710e3b63de8c6af7598461009b565b6104cb6101408801357f29a1f84d1bd371806d2b54fd9028ab481d4faff565c20b7b008f356f522662e07f0645a5ecf50638f17e676f556031fc11d691393636db91605893b32c1e7c3f628461009b565b61051c6101608801357f1539f25c36296e082069ae50a8ac9857ee87f4917bd504a103cb06f3356557687f032013875dc97564c56450499b7bafcfd01540196c8639a85702f2a51360b8c88461009b565b61056d6101808801357f2146087bbc26c535e19597ce205a39fac2ce19590eb2961fd3ac0c462855f3c37f25c657d860736fdee5b0a4173b44e4fcdecdffce9422f714e39e9db32927d1868461009b565b6105be6101a08801357f07cefc6ac5eaf6b85fd3896916b0dbbb9f1f7c7c0fd791a34698c132bf685abb7f0eff9983dcfcd42b73568cecb9830d03f25545cce921ef1b272ccedce2c435a28461009b565b61060f6101c08801357f2af62f27556ad6dd11c1c7ddd6551415425d9e7028d0f92ff9f3e59717b49df67f221bc6c9b25e6b8b33a9afa4ec94a5de51d5bc865aca7b0364938063b01b649e8461009b565b6106606101e08801357f046a14665e35d7675e06c77621e91935193ec8c2c63ab1f1c8168b7049c9dbfe7f0370398f5a589e7fdd00b564ca5c884bfad324c505812104514f2bcc11b182258461009b565b6106b16102008801357f09dc720f2b27c17fd53463f4c5884ac979e96395a81ec39a5159c118876011a87f01b0eed164f002ba3bfb32ca160e837223ea271f4ddfd3c974e0d7bf4e22357a8461009b565b6107026102208801357f211500fc7121aab601a38a0acfa76c575b7956d6dcfabb1f7995c967861b730b7f09e02ff83f9835895681f1d31ee3ffba73cd8eaf63c30609014953119712f32b8461009b565b6107536102408801357f2376257d004223af0e6489d25e64166da9fffb80b3cb635a88407122d7d910f67f1877df48e29c674c8352ac5c6350547bdf796d74cd28f83c1df9505e71371ff18461009b565b6107a46102608801357f279072ed3ae698f4fe0d1549753c89984edea5bdef973225a788d9f6d7a60c407f2eadc375d9b59ce74fa3fbbe813e8acad39e0fe067fa87251e0022701f0faa368461009b565b6107f56102808801357f053e0195aa3cf4d350c69012964a8b197a5f5f6d9978d29cbcf719cc7b44c0377f2d14de4d604f21529b321dac551d5d830e450a30980f0523e1a9b2a1ca2111048461009b565b6108466102a08801357f16e184fa4b95ea348a9bc199697704513bc37ebab6757c82dfaab33b3e9b6be17f0141a51cf075185b098f6d0a3bc54f1c1cd7f9804919623b0e653cc2ca4c5d828461009b565b6108976102c08801357f1a7c9e749c267485f1fbe7472d942e525093a8e340fc716204689c989aa5bb907f0bc8fb550855dac40e96adfeba50fddae6df672e04f173af5dd7aaa1feae0cdb8461009b565b6108e86102e08801357f2fe270d51f667c9c2cb2eeccdc486952545015b7db092ee7fd2610add80d11597f26992dcab5c11075e3c272428c07aef6095ce2e515fc09c8dd197fdc1e5cc2af8461009b565b6109396103008801357f02b9678f1d1f83326586bdf8c3a712d99c61e5ca9b0e1615bbe2e39a93936c9f7f110b5b0f8cc6af959d94a98d251803717fb4738114a23681903d5397ac67a6178461009b565b61098a6103208801357f0713ef679076a73b212295e52474264b52ebe5d8a15492a4eaa0764c37aec1f97f1522d4614a008f6ac9edaff99da745eaafe9e7134fa300dc4bd387e2fc9982778461009b565b6109db6103408801357f0d410462cecfeda5bbcf25f5443db7348211ac571bc172e25a0f6a3bd9fff2327f093231d1491f79adc648cfe560a5f694ede1298f99edf8519ccfeaa46882149a8461009b565b610a2c6103608801357f1d921932b532a9cd80b9f6ca27602bb1c5a76be5256228ee29882a9c37b5c7137f13a33650ab5ef25d7f48a1e353cfe078288e17e87d0e6553bede4016a13bd6c88461009b565b610a7d6103808801357f1306012c596928b5f336b7df9b30f987e22365754b8822a49e1e4658a108dbfc7f052740dcbbaba4e97a2bb22a883de694170c853e12a5ff88a6a89c15cfc0c6768461009b565b610ace6103a08801357f054c40dea3c7a1038a0e04b38b55c1f0eb9f3fa11678ab818c3ee197c6133af37f2755e44715a61e69f371f03f27ce9b1d24347650e3e182788241e2434ca84a5b8461009b565b610b1f6103c08801357f2069b2f1c70c7bdb78a7d50cc8b04a48af4634bcacab8041ae15dc561b8a03797f1c13bf05fd1f42e03a35f699e8c620448b183be227f0d5af897796b6261c7b258461009b565b610b706103e08801357f208fc9880aa2d2ee157803f65c5281ac1a60a0d25bd99bb0a734f92ee64be7e87f0591dd47d001f2af65ce0650aa7c947239c751d73eaa6516ab49562804fff88e8461009b565b610bc16104008801357f11d9f2e283049f7422ef1924d574de3f71e24fb3fc5fde612ed9f1e43ab0bf147f20413e47b2373cf26c99dd47d3d6bcd8f6c2d43553bf2ae6b0260e5ff9d42cf98461009b565b610c126104208801357f2990a1a7c720b03282f52d6dec9206be516df7d05e11ce9292556dd5969bc0537f129a77fcb078b26969d29ea3128f4cd8eda648f3eea42f8805dd593b1ee70f8f8461009b565b833582527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4760208501357f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4703066020830152843560408301526020850135606083015260408501356080830152606085013560a08301527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e260c08301527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d192660e08301527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c6101008301527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab6101208301527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a76101408301527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8610160830152600088015161018083015260206000018801516101a08301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101c08301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101e08301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102008301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa610220830152853561024083015260208601356102608301527f0b58532df5ac163ae9f2cb118991860b10db0c15c2871336106816795cbf295d6102808301527f14053833d28897afd8b3da1a7d448e85be7fc52bcc6b10c8edb623bff09fd9c46102a08301527f19afcdb23b984735eff63fadc76d03629d9be6ff2e8a371c74a1e6564d2010f06102c08301527f2b8a715912638ad2404f49106b5266d4a0c5d5e8a88aaf75da9c18bd67943c2c6102e08301526020826103008460086107d05a03fa82518116935050505095945050505050565b6040516103808101604052610f0e6000840135610067565b610f1b6020840135610067565b610f286040840135610067565b610f356060840135610067565b610f426080840135610067565b610f4f60a0840135610067565b610f5c60c0840135610067565b610f6960e0840135610067565b610f77610100840135610067565b610f85610120840135610067565b610f93610140840135610067565b610fa1610160840135610067565b610faf610180840135610067565b610fbd6101a0840135610067565b610fcb6101c0840135610067565b610fd96101e0840135610067565b610fe7610200840135610067565b610ff5610220840135610067565b611003610240840135610067565b611011610260840135610067565b61101f610280840135610067565b61102d6102a0840135610067565b61103b6102c0840135610067565b6110496102e0840135610067565b611057610300840135610067565b611065610320840135610067565b611073610340840135610067565b611081610360840135610067565b61108f610380840135610067565b61109d6103a0840135610067565b6110ab6103c0840135610067565b6110b96103e0840135610067565b6110c7610400840135610067565b6110d5610420840135610067565b6110e3610440840135610067565b6110f0818486888a610106565b8060005260206000f35b600080fd5b600080fd5b6000819050826020600202820111156111205761111f6110ff565b5b92915050565b600081905082604060020282011115611142576111416110ff565b5b92915050565b600081905082602060220282011115611164576111636110ff565b5b92915050565b6000806000806105408587031215611185576111846110fa565b5b600061119387828801611104565b94505060406111a487828801611126565b93505060c06111b587828801611104565b9250506101006111c787828801611148565b91505092959194509250565b60008115159050919050565b6111e8816111d3565b82525050565b600060208201905061120360008301846111df565b9291505056fea2646970667358221220e73f79380b09c2c7d98323dcac60882d54cf932a9097d48f5bdad6b53ac3e69364736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Verifier",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Verifier$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Verifier.sol:Verifier",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Verifier$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Verifier",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Verifier$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Verifier.sol:Verifier",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Verifier$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Verifier",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Verifier$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Verifier.sol:Verifier",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Verifier$Type["abi"]>>;
}
